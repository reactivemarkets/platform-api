// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ReactiveMarkets.Switchboard
{

using global::System;
using global::System.Collections.Generic;
using global::FlatBuffers;

public struct SessionStatus : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_1_12_0(); }
  public static SessionStatus GetRootAsSessionStatus(ByteBuffer _bb) { return GetRootAsSessionStatus(_bb, new SessionStatus()); }
  public static SessionStatus GetRootAsSessionStatus(ByteBuffer _bb, SessionStatus obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public SessionStatus __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long SourceTs { get { int o = __p.__offset(4); return o != 0 ? __p.bb.GetLong(o + __p.bb_pos) : (long)0; } }
  public string Source { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetSourceBytes() { return __p.__vector_as_span<byte>(6, 1); }
#else
  public ArraySegment<byte>? GetSourceBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetSourceArray() { return __p.__vector_as_array<byte>(6); }
  public int Code { get { int o = __p.__offset(8); return o != 0 ? __p.bb.GetInt(o + __p.bb_pos) : (int)0; } }
  public string Message { get { int o = __p.__offset(10); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetMessageBytes() { return __p.__vector_as_span<byte>(10, 1); }
#else
  public ArraySegment<byte>? GetMessageBytes() { return __p.__vector_as_arraysegment(10); }
#endif
  public byte[] GetMessageArray() { return __p.__vector_as_array<byte>(10); }

  public static Offset<ReactiveMarkets.Switchboard.SessionStatus> CreateSessionStatus(FlatBufferBuilder builder,
      long source_ts = 0,
      StringOffset sourceOffset = default(StringOffset),
      int code = 0,
      StringOffset messageOffset = default(StringOffset)) {
    builder.StartTable(4);
    SessionStatus.AddSourceTs(builder, source_ts);
    SessionStatus.AddMessage(builder, messageOffset);
    SessionStatus.AddCode(builder, code);
    SessionStatus.AddSource(builder, sourceOffset);
    return SessionStatus.EndSessionStatus(builder);
  }

  public static void StartSessionStatus(FlatBufferBuilder builder) { builder.StartTable(4); }
  public static void AddSourceTs(FlatBufferBuilder builder, long sourceTs) { builder.AddLong(0, sourceTs, 0); }
  public static void AddSource(FlatBufferBuilder builder, StringOffset sourceOffset) { builder.AddOffset(1, sourceOffset.Value, 0); }
  public static void AddCode(FlatBufferBuilder builder, int code) { builder.AddInt(2, code, 0); }
  public static void AddMessage(FlatBufferBuilder builder, StringOffset messageOffset) { builder.AddOffset(3, messageOffset.Value, 0); }
  public static Offset<ReactiveMarkets.Switchboard.SessionStatus> EndSessionStatus(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<ReactiveMarkets.Switchboard.SessionStatus>(o);
  }
};


}
