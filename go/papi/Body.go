// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package papi

import "strconv"

type Body byte

const (
	BodyNONE              Body = 0
	BodyFeedRequest       Body = 1
	BodyFeedRequestAccept Body = 2
	BodyFeedRequestReject Body = 3
	BodyLiquidationOrder  Body = 4
	BodyMDSnapshotL2      Body = 5
	BodyPublicTrade       Body = 6
	BodySessionStatus     Body = 7
)

var EnumNamesBody = map[Body]string{
	BodyNONE:              "NONE",
	BodyFeedRequest:       "FeedRequest",
	BodyFeedRequestAccept: "FeedRequestAccept",
	BodyFeedRequestReject: "FeedRequestReject",
	BodyLiquidationOrder:  "LiquidationOrder",
	BodyMDSnapshotL2:      "MDSnapshotL2",
	BodyPublicTrade:       "PublicTrade",
	BodySessionStatus:     "SessionStatus",
}

var EnumValuesBody = map[string]Body{
	"NONE":              BodyNONE,
	"FeedRequest":       BodyFeedRequest,
	"FeedRequestAccept": BodyFeedRequestAccept,
	"FeedRequestReject": BodyFeedRequestReject,
	"LiquidationOrder":  BodyLiquidationOrder,
	"MDSnapshotL2":      BodyMDSnapshotL2,
	"PublicTrade":       BodyPublicTrade,
	"SessionStatus":     BodySessionStatus,
}

func (v Body) String() string {
	if s, ok := EnumNamesBody[v]; ok {
		return s
	}
	return "Body(" + strconv.FormatInt(int64(v), 10) + ")"
}
