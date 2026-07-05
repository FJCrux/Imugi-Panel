# Advanced mieru tuning

The **Advanced** page exposes the rest of mita's server config: DNS behavior,
traffic obfuscation, and server-side hardening. Everything applies via a config
reload — no dropped connections. Defaults are fine for most deployments; every
field in the UI has a tooltip with the same explanations as below.

## DNS

- **Dual stack preference** - when a destination domain has both A and AAAA
  records, pick which family mita connects over: first answer (default),
  prefer/only IPv4, prefer/only IPv6. Useful on hosts with broken or
  rate-limited IPv6.
- **Static hosts** - domain → IP overrides, like `/etc/hosts` on the server.
  Client requests to those domains skip DNS resolution entirely.

## Traffic obfuscation

Fine-tunes how mieru traffic looks on the wire. Change these only if you know
what your censor keys on.

- **Pattern seed** - seed for the implicit (generated) traffic patterns. The
  same seed always yields the same behavior, so it's stable across restarts.
- **Unlock all patterns** - allow generated patterns to use every option
  instead of a limited safe subset.
- **TCP fragmentation** - split TCP packets into smaller fragments, with an
  optional max inter-fragment delay (0–100 ms).
- **Nonce pattern** - shape the random prefix of encrypted packets: printable
  ASCII, a printable subset, or fixed custom hex prefixes (up to 12 bytes,
  e.g. `16030100` to mimic a TLS handshake). Optionally apply to every UDP
  packet and bound how many bytes are rewritten.
- **Padding** - cap the random padding bytes injected mid-segment and at
  segment end (0–255; 0 disables, empty keeps mieru's internal default).

## Server behavior

- **Metrics logging interval** - how often mita logs traffic metrics
  (`30s`, `5m`, `2h`).
- **Require user hint** - refuse to attempt decryption of packets without a
  user hint. Hardens against active probing and cuts CPU under junk floods;
  very old mieru clients can't connect with this on.

## Where it's stored

These map 1:1 to the `dns`, `trafficPattern`, and `advancedSettings` sections
of mita's server config. The panel reads and writes them over mita's gRPC API
(`GetConfig`/`SetConfig` + reload); anything you set with `mita apply config`
by hand is preserved by the panel and vice versa.
