// SPDX-License-Identifier: GPL-3.0-or-later

package api

import (
	"testing"

	pb "github.com/enfein/mieru/v3/pkg/appctl/appctlpb"
	metricspb "github.com/enfein/mieru/v3/pkg/metrics/metricspb"
	"google.golang.org/protobuf/proto"
)

func userWithHistory(entries ...*metricspb.History) *pb.UserWithMetrics {
	return &pb.UserWithMetrics{
		Metrics: []*metricspb.Metric{
			{Name: proto.String("DownloadBytes"), History: entries},
		},
	}
}

func hist(ms, delta int64) *metricspb.History {
	return &metricspb.History{TimeUnixMilli: proto.Int64(ms), Delta: proto.Int64(delta)}
}

func TestLastActiveMillis(t *testing.T) {
	if got := lastActiveMillis(&pb.UserWithMetrics{}); got != 0 {
		t.Errorf("no metrics: got %d, want 0", got)
	}
	// Only positive-delta windows count as activity; the latest one wins.
	item := userWithHistory(hist(1000, 500), hist(3000, 0), hist(2000, 250))
	if got := lastActiveMillis(item); got != 2000 {
		t.Errorf("mixed history: got %d, want 2000", got)
	}
	// A counter that exists but never moved means never active.
	if got := lastActiveMillis(userWithHistory(hist(5000, 0))); got != 0 {
		t.Errorf("zero-delta only: got %d, want 0", got)
	}
}
