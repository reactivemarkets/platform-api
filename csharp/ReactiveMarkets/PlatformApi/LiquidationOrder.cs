// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ReactiveMarkets.PlatformApi
{

using global::System;
using global::System.Collections.Generic;
using global::FlatBuffers;

public struct LiquidationOrder : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_1_12_0(); }
  public static LiquidationOrder GetRootAsLiquidationOrder(ByteBuffer _bb) { return GetRootAsLiquidationOrder(_bb, new LiquidationOrder()); }
  public static LiquidationOrder GetRootAsLiquidationOrder(ByteBuffer _bb, LiquidationOrder obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public LiquidationOrder __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long SourceTs { get { int o = __p.__offset(4); return o != 0 ? __p.bb.GetLong(o + __p.bb_pos) : (long)0; } }
  public string Source { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSourceBytes() { return __p.__vector_as_span<byte>(6, 1); }
#else
  public ArraySegment<byte>? GetSourceBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetSourceArray() { return __p.__vector_as_array<byte>(6); }
  public string Market { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetMarketBytes() { return __p.__vector_as_span<byte>(8, 1); }
#else
  public ArraySegment<byte>? GetMarketBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetMarketArray() { return __p.__vector_as_array<byte>(8); }
  public string OrderId { get { int o = __p.__offset(10); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetOrderIdBytes() { return __p.__vector_as_span<byte>(10, 1); }
#else
  public ArraySegment<byte>? GetOrderIdBytes() { return __p.__vector_as_arraysegment(10); }
#endif
  public byte[] GetOrderIdArray() { return __p.__vector_as_array<byte>(10); }
  public ushort Flags { get { int o = __p.__offset(12); return o != 0 ? __p.bb.GetUshort(o + __p.bb_pos) : (ushort)0; } }
  public ReactiveMarkets.PlatformApi.Side Side { get { int o = __p.__offset(14); return o != 0 ? (ReactiveMarkets.PlatformApi.Side)__p.bb.GetSbyte(o + __p.bb_pos) : ReactiveMarkets.PlatformApi.Side.None; } }
  public double Qty { get { int o = __p.__offset(16); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  public double Price { get { int o = __p.__offset(18); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }

  public static Offset<ReactiveMarkets.PlatformApi.LiquidationOrder> CreateLiquidationOrder(FlatBufferBuilder builder,
      long source_ts = 0,
      StringOffset sourceOffset = default(StringOffset),
      StringOffset marketOffset = default(StringOffset),
      StringOffset order_idOffset = default(StringOffset),
      ushort flags = 0,
      ReactiveMarkets.PlatformApi.Side side = ReactiveMarkets.PlatformApi.Side.None,
      double qty = 0.0,
      double price = 0.0) {
    builder.StartTable(8);
    LiquidationOrder.AddPrice(builder, price);
    LiquidationOrder.AddQty(builder, qty);
    LiquidationOrder.AddSourceTs(builder, source_ts);
    LiquidationOrder.AddOrderId(builder, order_idOffset);
    LiquidationOrder.AddMarket(builder, marketOffset);
    LiquidationOrder.AddSource(builder, sourceOffset);
    LiquidationOrder.AddFlags(builder, flags);
    LiquidationOrder.AddSide(builder, side);
    return LiquidationOrder.EndLiquidationOrder(builder);
  }

  public static void StartLiquidationOrder(FlatBufferBuilder builder) { builder.StartTable(8); }
  public static void AddSourceTs(FlatBufferBuilder builder, long sourceTs) { builder.AddLong(0, sourceTs, 0); }
  public static void AddSource(FlatBufferBuilder builder, StringOffset sourceOffset) { builder.AddOffset(1, sourceOffset.Value, 0); }
  public static void AddMarket(FlatBufferBuilder builder, StringOffset marketOffset) { builder.AddOffset(2, marketOffset.Value, 0); }
  public static void AddOrderId(FlatBufferBuilder builder, StringOffset orderIdOffset) { builder.AddOffset(3, orderIdOffset.Value, 0); }
  public static void AddFlags(FlatBufferBuilder builder, ushort flags) { builder.AddUshort(4, flags, 0); }
  public static void AddSide(FlatBufferBuilder builder, ReactiveMarkets.PlatformApi.Side side) { builder.AddSbyte(5, (sbyte)side, 0); }
  public static void AddQty(FlatBufferBuilder builder, double qty) { builder.AddDouble(6, qty, 0.0); }
  public static void AddPrice(FlatBufferBuilder builder, double price) { builder.AddDouble(7, price, 0.0); }
  public static Offset<ReactiveMarkets.PlatformApi.LiquidationOrder> EndLiquidationOrder(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    builder.Required(o, 8);  // market
    return new Offset<ReactiveMarkets.PlatformApi.LiquidationOrder>(o);
  }
};


}
