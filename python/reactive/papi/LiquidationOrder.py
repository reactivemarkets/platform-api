# automatically generated by the FlatBuffers compiler, do not modify

# namespace: papi

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class LiquidationOrder(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsLiquidationOrder(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = LiquidationOrder()
        x.Init(buf, n + offset)
        return x

    # LiquidationOrder
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # LiquidationOrder
    def SourceTs(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int64Flags, o + self._tab.Pos)
        return 0

    # LiquidationOrder
    def Source(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # LiquidationOrder
    def Market(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # LiquidationOrder
    def OrderId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return None

    # LiquidationOrder
    def Flags(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint16Flags, o + self._tab.Pos)
        return 0

    # LiquidationOrder
    def Side(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # LiquidationOrder
    def Qty(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

    # LiquidationOrder
    def Price(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(18))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Float64Flags, o + self._tab.Pos)
        return 0.0

def LiquidationOrderStart(builder): builder.StartObject(8)
def LiquidationOrderAddSourceTs(builder, sourceTs): builder.PrependInt64Slot(0, sourceTs, 0)
def LiquidationOrderAddSource(builder, source): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(source), 0)
def LiquidationOrderAddMarket(builder, market): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(market), 0)
def LiquidationOrderAddOrderId(builder, orderId): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(orderId), 0)
def LiquidationOrderAddFlags(builder, flags): builder.PrependUint16Slot(4, flags, 0)
def LiquidationOrderAddSide(builder, side): builder.PrependInt8Slot(5, side, 0)
def LiquidationOrderAddQty(builder, qty): builder.PrependFloat64Slot(6, qty, 0.0)
def LiquidationOrderAddPrice(builder, price): builder.PrependFloat64Slot(7, price, 0.0)
def LiquidationOrderEnd(builder): return builder.EndObject()
