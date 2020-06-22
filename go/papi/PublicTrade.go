// Code generated by the FlatBuffers compiler. DO NOT EDIT.

package papi

import (
	flatbuffers "github.com/google/flatbuffers/go"
)

type PublicTrade struct {
	_tab flatbuffers.Table
}

func GetRootAsPublicTrade(buf []byte, offset flatbuffers.UOffsetT) *PublicTrade {
	n := flatbuffers.GetUOffsetT(buf[offset:])
	x := &PublicTrade{}
	x.Init(buf, n+offset)
	return x
}

func (rcv *PublicTrade) Init(buf []byte, i flatbuffers.UOffsetT) {
	rcv._tab.Bytes = buf
	rcv._tab.Pos = i
}

func (rcv *PublicTrade) Table() flatbuffers.Table {
	return rcv._tab
}

func (rcv *PublicTrade) SourceTs() int64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(4))
	if o != 0 {
		return rcv._tab.GetInt64(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *PublicTrade) MutateSourceTs(n int64) bool {
	return rcv._tab.MutateInt64Slot(4, n)
}

func (rcv *PublicTrade) Source() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(6))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PublicTrade) Market() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(8))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PublicTrade) FeedId() int32 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(10))
	if o != 0 {
		return rcv._tab.GetInt32(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *PublicTrade) MutateFeedId(n int32) bool {
	return rcv._tab.MutateInt32Slot(10, n)
}

func (rcv *PublicTrade) TradeId() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(12))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func (rcv *PublicTrade) Flags() uint16 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(14))
	if o != 0 {
		return rcv._tab.GetUint16(o + rcv._tab.Pos)
	}
	return 0
}

func (rcv *PublicTrade) MutateFlags(n uint16) bool {
	return rcv._tab.MutateUint16Slot(14, n)
}

func (rcv *PublicTrade) Side() Side {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(16))
	if o != 0 {
		return Side(rcv._tab.GetInt8(o + rcv._tab.Pos))
	}
	return 0
}

func (rcv *PublicTrade) MutateSide(n Side) bool {
	return rcv._tab.MutateInt8Slot(16, int8(n))
}

func (rcv *PublicTrade) Qty() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(18))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *PublicTrade) MutateQty(n float64) bool {
	return rcv._tab.MutateFloat64Slot(18, n)
}

func (rcv *PublicTrade) Price() float64 {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(20))
	if o != 0 {
		return rcv._tab.GetFloat64(o + rcv._tab.Pos)
	}
	return 0.0
}

func (rcv *PublicTrade) MutatePrice(n float64) bool {
	return rcv._tab.MutateFloat64Slot(20, n)
}

func (rcv *PublicTrade) ExecVenue() []byte {
	o := flatbuffers.UOffsetT(rcv._tab.Offset(22))
	if o != 0 {
		return rcv._tab.ByteVector(o + rcv._tab.Pos)
	}
	return nil
}

func PublicTradeStart(builder *flatbuffers.Builder) {
	builder.StartObject(10)
}
func PublicTradeAddSourceTs(builder *flatbuffers.Builder, sourceTs int64) {
	builder.PrependInt64Slot(0, sourceTs, 0)
}
func PublicTradeAddSource(builder *flatbuffers.Builder, source flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(1, flatbuffers.UOffsetT(source), 0)
}
func PublicTradeAddMarket(builder *flatbuffers.Builder, market flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(2, flatbuffers.UOffsetT(market), 0)
}
func PublicTradeAddFeedId(builder *flatbuffers.Builder, feedId int32) {
	builder.PrependInt32Slot(3, feedId, 0)
}
func PublicTradeAddTradeId(builder *flatbuffers.Builder, tradeId flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(4, flatbuffers.UOffsetT(tradeId), 0)
}
func PublicTradeAddFlags(builder *flatbuffers.Builder, flags uint16) {
	builder.PrependUint16Slot(5, flags, 0)
}
func PublicTradeAddSide(builder *flatbuffers.Builder, side Side) {
	builder.PrependInt8Slot(6, int8(side), 0)
}
func PublicTradeAddQty(builder *flatbuffers.Builder, qty float64) {
	builder.PrependFloat64Slot(7, qty, 0.0)
}
func PublicTradeAddPrice(builder *flatbuffers.Builder, price float64) {
	builder.PrependFloat64Slot(8, price, 0.0)
}
func PublicTradeAddExecVenue(builder *flatbuffers.Builder, execVenue flatbuffers.UOffsetT) {
	builder.PrependUOffsetTSlot(9, flatbuffers.UOffsetT(execVenue), 0)
}
func PublicTradeEnd(builder *flatbuffers.Builder) flatbuffers.UOffsetT {
	return builder.EndObject()
}