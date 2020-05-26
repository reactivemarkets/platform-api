// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ReactiveMarkets.PlatformApi
{

using global::System;
using global::System.Collections.Generic;
using global::FlatBuffers;

public struct Message : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static void ValidateVersion() { FlatBufferConstants.FLATBUFFERS_1_12_0(); }
  public static Message GetRootAsMessage(ByteBuffer _bb) { return GetRootAsMessage(_bb, new Message()); }
  public static Message GetRootAsMessage(ByteBuffer _bb, Message obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public static bool MessageBufferHasIdentifier(ByteBuffer _bb) { return Table.__has_identifier(_bb, "RMP1"); }
  public void __init(int _i, ByteBuffer _bb) { __p = new Table(_i, _bb); }
  public Message __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long Tts { get { int o = __p.__offset(4); return o != 0 ? __p.bb.GetLong(o + __p.bb_pos) : (long)0; } }
  public ReactiveMarkets.PlatformApi.Body BodyType { get { int o = __p.__offset(6); return o != 0 ? (ReactiveMarkets.PlatformApi.Body)__p.bb.Get(o + __p.bb_pos) : ReactiveMarkets.PlatformApi.Body.NONE; } }
  public TTable? Body<TTable>() where TTable : struct, IFlatbufferObject { int o = __p.__offset(8); return o != 0 ? (TTable?)__p.__union<TTable>(o + __p.bb_pos) : null; }

  public static Offset<ReactiveMarkets.PlatformApi.Message> CreateMessage(FlatBufferBuilder builder,
      long tts = 0,
      ReactiveMarkets.PlatformApi.Body body_type = ReactiveMarkets.PlatformApi.Body.NONE,
      int bodyOffset = 0) {
    builder.StartTable(3);
    Message.AddTts(builder, tts);
    Message.AddBody(builder, bodyOffset);
    Message.AddBodyType(builder, body_type);
    return Message.EndMessage(builder);
  }

  public static void StartMessage(FlatBufferBuilder builder) { builder.StartTable(3); }
  public static void AddTts(FlatBufferBuilder builder, long tts) { builder.AddLong(0, tts, 0); }
  public static void AddBodyType(FlatBufferBuilder builder, ReactiveMarkets.PlatformApi.Body bodyType) { builder.AddByte(1, (byte)bodyType, 0); }
  public static void AddBody(FlatBufferBuilder builder, int bodyOffset) { builder.AddOffset(2, bodyOffset, 0); }
  public static Offset<ReactiveMarkets.PlatformApi.Message> EndMessage(FlatBufferBuilder builder) {
    int o = builder.EndTable();
    return new Offset<ReactiveMarkets.PlatformApi.Message>(o);
  }
  public static void FinishMessageBuffer(FlatBufferBuilder builder, Offset<ReactiveMarkets.PlatformApi.Message> offset) { builder.Finish(offset.Value, "RMP1"); }
  public static void FinishSizePrefixedMessageBuffer(FlatBufferBuilder builder, Offset<ReactiveMarkets.PlatformApi.Message> offset) { builder.FinishSizePrefixed(offset.Value, "RMP1"); }
};


}
