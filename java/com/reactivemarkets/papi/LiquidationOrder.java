// automatically generated by the FlatBuffers compiler, do not modify

package com.reactivemarkets.papi;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class LiquidationOrder extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_1_12_0(); }
  public static LiquidationOrder getRootAsLiquidationOrder(ByteBuffer _bb) { return getRootAsLiquidationOrder(_bb, new LiquidationOrder()); }
  public static LiquidationOrder getRootAsLiquidationOrder(ByteBuffer _bb, LiquidationOrder obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public LiquidationOrder __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long sourceTs() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public String source() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer sourceAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer sourceInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  public String market() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer marketAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer marketInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  public String orderId() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer orderIdAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer orderIdInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  public int flags() { int o = __offset(12); return o != 0 ? bb.getShort(o + bb_pos) & 0xFFFF : 0; }
  public byte side() { int o = __offset(14); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public double qty() { int o = __offset(16); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  public double price() { int o = __offset(18); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }

  public static int createLiquidationOrder(FlatBufferBuilder builder,
      long source_ts,
      int sourceOffset,
      int marketOffset,
      int order_idOffset,
      int flags,
      byte side,
      double qty,
      double price) {
    builder.startTable(8);
    LiquidationOrder.addPrice(builder, price);
    LiquidationOrder.addQty(builder, qty);
    LiquidationOrder.addSourceTs(builder, source_ts);
    LiquidationOrder.addOrderId(builder, order_idOffset);
    LiquidationOrder.addMarket(builder, marketOffset);
    LiquidationOrder.addSource(builder, sourceOffset);
    LiquidationOrder.addFlags(builder, flags);
    LiquidationOrder.addSide(builder, side);
    return LiquidationOrder.endLiquidationOrder(builder);
  }

  public static void startLiquidationOrder(FlatBufferBuilder builder) { builder.startTable(8); }
  public static void addSourceTs(FlatBufferBuilder builder, long sourceTs) { builder.addLong(0, sourceTs, 0L); }
  public static void addSource(FlatBufferBuilder builder, int sourceOffset) { builder.addOffset(1, sourceOffset, 0); }
  public static void addMarket(FlatBufferBuilder builder, int marketOffset) { builder.addOffset(2, marketOffset, 0); }
  public static void addOrderId(FlatBufferBuilder builder, int orderIdOffset) { builder.addOffset(3, orderIdOffset, 0); }
  public static void addFlags(FlatBufferBuilder builder, int flags) { builder.addShort(4, (short)flags, (short)0); }
  public static void addSide(FlatBufferBuilder builder, byte side) { builder.addByte(5, side, 0); }
  public static void addQty(FlatBufferBuilder builder, double qty) { builder.addDouble(6, qty, 0.0); }
  public static void addPrice(FlatBufferBuilder builder, double price) { builder.addDouble(7, price, 0.0); }
  public static int endLiquidationOrder(FlatBufferBuilder builder) {
    int o = builder.endTable();
    builder.required(o, 8);  // market
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public LiquidationOrder get(int j) { return get(new LiquidationOrder(), j); }
    public LiquidationOrder get(LiquidationOrder obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

