# automatically generated by the FlatBuffers compiler, do not modify

# namespace: papi

import flatbuffers
from flatbuffers.compat import import_numpy
np = import_numpy()

class MDLevel2(object):
    __slots__ = ['_tab']

    # MDLevel2
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # MDLevel2
    def Qty(self): return self._tab.Get(flatbuffers.number_types.Float64Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(0))
    # MDLevel2
    def Price(self): return self._tab.Get(flatbuffers.number_types.Float64Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(8))

def CreateMDLevel2(builder, qty, price):
    builder.Prep(8, 16)
    builder.PrependFloat64(price)
    builder.PrependFloat64(qty)
    return builder.Offset()
