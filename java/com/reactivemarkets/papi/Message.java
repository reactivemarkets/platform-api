// automatically generated by the FlatBuffers compiler, do not modify

package com.reactivemarkets.papi;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Message extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_1_12_0(); }
  public static Message getRootAsMessage(ByteBuffer _bb) { return getRootAsMessage(_bb, new Message()); }
  public static Message getRootAsMessage(ByteBuffer _bb, Message obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public static boolean MessageBufferHasIdentifier(ByteBuffer _bb) { return __has_identifier(_bb, "RMP1"); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Message __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long tts() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public byte bodyType() { int o = __offset(6); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public Table body(Table obj) { int o = __offset(8); return o != 0 ? __union(obj, o + bb_pos) : null; }

  public static int createMessage(FlatBufferBuilder builder,
      long tts,
      byte body_type,
      int bodyOffset) {
    builder.startTable(3);
    Message.addTts(builder, tts);
    Message.addBody(builder, bodyOffset);
    Message.addBodyType(builder, body_type);
    return Message.endMessage(builder);
  }

  public static void startMessage(FlatBufferBuilder builder) { builder.startTable(3); }
  public static void addTts(FlatBufferBuilder builder, long tts) { builder.addLong(0, tts, 0L); }
  public static void addBodyType(FlatBufferBuilder builder, byte bodyType) { builder.addByte(1, bodyType, 0); }
  public static void addBody(FlatBufferBuilder builder, int bodyOffset) { builder.addOffset(2, bodyOffset, 0); }
  public static int endMessage(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }
  public static void finishMessageBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset, "RMP1"); }
  public static void finishSizePrefixedMessageBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset, "RMP1"); }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Message get(int j) { return get(new Message(), j); }
    public Message get(Message obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

