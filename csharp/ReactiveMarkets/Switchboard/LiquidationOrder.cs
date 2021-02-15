// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ReactiveMarkets.Switchboard
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
  public int FeedId { get { int o = __p.__offset(10); return o != 0 ? __p.bb.GetInt(o + __p.bb_pos) : (int)0; } }
  public string OrderId { get { int o = __p.__offset(12); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetOrderIdBytes() { return __p.__vector_as_span<byte>(12, 1); }
#else
  public ArraySegment<byte>? GetOrderIdBytes() { return __p.__vector_as_arraysegment(12); }
#endif
  public byte[] GetOrderIdArray() { return __p.__vector_as_array<byte>(12); }
  public ushort Flags { get { int o = __p.__offset(14); return o != 0 ? __p.bb.GetUshort(o + __p.bb_pos) : (ushort)0; } }
  public ReactiveMarkets.Switchboard.Side Side { get { int o = __p.__offset(16); return o != 0 ? (ReactiveMarkets.Switchboard.Side)__p.bb.GetSbyte(o + __p.bb_pos) : ReactiveMarkets.Switchboard.Side.None; } }
  public double Qty { get { int o = __p.__offset(18); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  public double Price { get { int o = __p.__offset(20); return o != 0 ? __p.bb.GetDouble(o + __p.bb_pos) : (double)0.0; } }
  public string ExecVenue { get { int o = __p.__offset(22); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetExecVenueBytes() { return __p.__vector_as_span<byte>(22, 1); }
#else
  public ArraySegment<byte>? GetExecVenueBytes() { return __p.__vector_as_arraysegment(22); }
#endif
  public byte[] GetExecVenueArray() { return __p.__vector_as_array<byte>(22); }

  public static Offset<ReactiveMarkets.Switchboard.LiquidationOrder> CreateLiquidationOrder(FlatBufferBuilder builder,
      long source_ts = 0,
      StringOffset sourceOffset = default(StringOffset),
      StringOffset marketOffset = default(StringOffset),
      int feed_id = 0,
      StringOffset order_idOffset = default(StringOffset),
      ushort flags = 0,
      ReactiveMarkets.Switchboard.Side side = ReactiveMarkets.Switchboard.Side.None,
      double qty = 0.0,
      double price = 0.0,
      StringOffset exec_venueOffset = default(StringOffset)) {
    builder.StartTable(10);
    LiquidationOrder.AddPrice(builder, price);
    LiquidationOrder.AddQty(builder, qty);
    LiquidationOrder.AddSourceTs(builder, source_ts);
    LiquidationOrder.AddExecVenue(builder, exec_venueOffset);
    LiquidationOrder.AddOrderId(builder, order_idOffset);
    LiquidationOrder.AddFeedId(builder, feed_id);
    LiquidationOrder.AddMarket(builder, marketOffset);
    LiquidationOrder.AddSource(builder, sourceOffset);
    LiquidationOrder.AddFlags(builder, flags);
    LiquidationOrder.AddSide(builder, side);
    return LiquidationOrder.EndLiquidationOrder(builder);
  }

  public static void StartLiquidationOrder(FlatBufferBuilder builder) { builder.StartTable(10); }
  public static void AddSourceTs(FlatBufferBuilder builder, long sourceTs) { builder.AddLong(0, sourceTs, 0); }
  public static void AddSource(FlatBufferBuilder builder, StringOffset sourceOffset) { builder.AddOffset(1, sourceOffset.Value, 0); }
  public static void AddMarket(FlatBufferBuilder builder, StringOffset marketOffset) { builder.AddOffset(2, marketOffset.Value, 0); }
  public static void AddFeedId(FlatBufferBuilder builder, int feedId) { builder.AddInt(3, feedId, 0); }
  public static void AddOrderId(FlatBufferBuilder builder, StringOffset orderIdOffset) { builder.AddOffset(4, orderIdOffset.Value, 0); }
  public static void AddFlags(FlatBufferBuilder builder, ushort flags) { builder.AddUshort(5, flags, 0); }
  public static void AddSide(FlatBufferBuilder builder, ReactiveMarkets.Switchboard.Side side) { builder.AddSbyte(6, (sbyte)side, 0); }
  public static void AddQty(FlatBufferBuilder builder, double qty) { builder.AddDouble(7, qty, 0.0); }
  public static void AddPrice(FlatBufferBuilder builder, double price) { builder.AddDouble(8, price, 0.0); }
  public static void AddExecVenue(FlatBufferBuilder builder, StringOffset execVenueOffset) { builder.AddOffset(9, execVenueOffset.Value, 0); }
  public static Offset<ReactiveMarkets.Switchboard.LiquidationOrder> EndLiquidationOrder(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    builder.Required(o, 8);  // market
    return new Offset<ReactiveMarkets.Switchboard.LiquidationOrder>(o);
  }
};


}