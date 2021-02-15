// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export namespace Switchboard{
export class SessionStatus {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns SessionStatus
 */
__init(i:number, bb:flatbuffers.ByteBuffer):SessionStatus {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param SessionStatus= obj
 * @returns SessionStatus
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:SessionStatus):SessionStatus {
  return (obj || new SessionStatus()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param SessionStatus= obj
 * @returns SessionStatus
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:SessionStatus):SessionStatus {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SessionStatus()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns flatbuffers.Long
 */
sourceTs():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
source():string|null
source(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
source(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
code():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
message():string|null
message(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
message(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long sourceTs
 */
static addSourceTs(builder:flatbuffers.Builder, sourceTs:flatbuffers.Long) {
  builder.addFieldInt64(0, sourceTs, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset sourceOffset
 */
static addSource(builder:flatbuffers.Builder, sourceOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, sourceOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number code
 */
static addCode(builder:flatbuffers.Builder, code:number) {
  builder.addFieldInt32(2, code, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset messageOffset
 */
static addMessage(builder:flatbuffers.Builder, messageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, messageOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static create(builder:flatbuffers.Builder, sourceTs:flatbuffers.Long, sourceOffset:flatbuffers.Offset, code:number, messageOffset:flatbuffers.Offset):flatbuffers.Offset {
  SessionStatus.start(builder);
  SessionStatus.addSourceTs(builder, sourceTs);
  SessionStatus.addSource(builder, sourceOffset);
  SessionStatus.addCode(builder, code);
  SessionStatus.addMessage(builder, messageOffset);
  return SessionStatus.end(builder);
}
}
}