# Reverse proxy and TLS

Always reach the panel over HTTPS. Pick the option that matches where your
nginx lives. In every case the mieru **proxy ports stay published directly**
on the panel container — they don't speak HTTP and never go through nginx.

## Option A: nginx in Docker, same compose (recommended)

Use the ready-made compose file that runs the panel and nginx on one Docker
network. The panel's HTTP port is **not published to the host at all** — nginx
reaches it by service name (`http://imugi-panel:8686`) and is the only web
entry point; the panel itself never listens on 443:

1. Copy the config and set `PANEL_DOMAIN` and `PANEL_URL` in `.env`:

   ```sh
   cp .env.example .env
   ```

2. Bootstrap the certificate — one-time, before the first start. Replace
   `vpn.example.com` and `you@example.com` with your domain and email:

   ```sh
   docker compose -f docker-compose.nginx.yml run --rm -p 80:80 certbot \
     certonly --standalone -d vpn.example.com --agree-tos -m you@example.com
   ```

3. Start the stack:

   ```sh
   docker compose -f docker-compose.nginx.yml up -d
   ```

Renewal is automatic: the `certbot` service renews over webroot and nginx
reloads itself every 6 hours to pick up rotated certificates. The nginx vhost
lives in `docker/nginx/templates/panel.conf.template` (rendered with your
domain on start).

## Option B: existing dockerized nginx / NPM / traefik

If you already run a reverse proxy in Docker (own compose project), don't
publish the panel port on the host — join the two compose projects with a
shared network instead:

```yaml
# in this project's docker-compose.yml, add:
services:
  imugi-panel:
    networks: [default, proxy]
networks:
  proxy:
    external: true
    name: nginx_default   # the network your nginx is attached to
```

Then point the proxy at `http://imugi-panel:8686` (compose service DNS works
across a shared network). For Nginx Proxy Manager: forward hostname
`imugi-panel`, port `8686`, scheme `http`.

Common trap: `proxy_pass http://127.0.0.1:8686` from inside an nginx
container points at the *nginx container itself*, not the host — that's why
the loopback publish from the default compose isn't reachable there. Either
share a network (above) or proxy to `host.docker.internal` /
`172.17.0.1:8686` as a last resort.

## Option C: nginx on the host

Keep the panel bound to loopback (the default compose publishes
`127.0.0.1:8686`) and terminate TLS in the host nginx:

```nginx
server {
    listen 443 ssl;
    server_name vpn.example.com;

    ssl_certificate     /etc/letsencrypt/live/vpn.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vpn.example.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8686;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
    }
}
```

## Option D: built-in TLS (no proxy)

Mount a certificate and key and point the panel at them:

```env
PANEL_TLS_CERT=/data/tls/cert.pem
PANEL_TLS_KEY=/data/tls/key.pem
```

Put the files under the `/data` volume. The panel then serves HTTPS directly;
publish its port (e.g. `443:8686`) instead of binding to loopback. Only use
this when nothing else needs 443 on the machine.

## Silencing the "plain HTTP" warning behind a proxy

When TLS is terminated by nginx or an external load balancer, the panel itself
receives plain HTTP and shows a hardening warning about it. Set
`PANEL_TRUST_PROXY=true` so the panel trusts the proxy's `X-Forwarded-Proto`
header and treats the connection as secure. The proxy must send that header
(the nginx examples here and the bundled `docker-compose.nginx.yml` do; for an
external balancer, enable "X-Forwarded-Proto" / proto forwarding on it).

Enable it **only** when a proxy is genuinely in front of the panel — if clients
can reach the panel port directly, they could forge the header.

## In all cases

- Set **Panel URL** in Settings (or `PANEL_URL`) to `https://vpn.example.com`.
  The panel uses it for share links and rejects requests with any other Host,
  so nginx must pass `Host` through (the examples above do).
- If you run the panel under a [secret base path](hardening.md), proxy only
  that path (e.g. `location /a7Fq2xK/ { ... }` plus the share path) so nothing
  answers at `/`.
- Crawlers are already handled by the panel itself: it serves a deny-all
  `/robots.txt` and sends `X-Robots-Tag: noindex` on every response.

## Why it matters

Over plain HTTP the admin password, session cookie, and client credentials
travel in the clear. The dashboard shows a warning when it detects plain HTTP on
a non-loopback address.
