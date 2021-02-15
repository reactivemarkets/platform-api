// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export namespace Switchboard{
export class MDLevel2 {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns MDLevel2
 */
__init(i:number, bb:flatbuffers.ByteBuffer):MDLevel2 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
qty():number {
  return this.bb!.readFloat64(this.bb_pos);
};

/**
 * @returns number
 */
price():number {
  return this.bb!.readFloat64(this.bb_pos + 8);
};

/**
 * @param flatbuffers.Builder builder
 * @param number qty
 * @param number price
 * @returns flatbuffers.Offset
 */
static create(builder:flatbuffers.Builder, qty: number, price: number):flatbuffers.Offset {
  builder.prep(8, 16);
  builder.writeFloat64(price);
  builder.writeFloat64(qty);
  return builder.offset();
};

}
}
/**
 * @constructor
 */
export namespace Switchboard{
export class MDSnapshotL2 {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns MDSnapshotL2
 */
__init(i:number, bb:flatbuffers.ByteBuffer):MDSnapshotL2 {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param MDSnapshotL2= obj
 * @returns MDSnapshotL2
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:MDSnapshotL2):MDSnapshotL2 {
  return (obj || new MDSnapshotL2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param MDSnapshotL2= obj
 * @returns MDSnapshotL2
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:MDSnapshotL2):MDSnapshotL2 {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new MDSnapshotL2()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
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
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
market():string|null
market(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
market(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
feedId():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns flatbuffers.Long
 */
id():flatbuffers.Long {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt64(this.bb_pos + offset) : this.bb!.createLong(0, 0);
};

/**
 * @returns number
 */
depth():number {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt16(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
flags():number {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @param number index
 * @param Switchboard.MDLevel2= obj
 * @returns Switchboard.MDLevel2
 */
bidSide(index: number, obj?:Switchboard.MDLevel2):Switchboard.MDLevel2|null {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new Switchboard.MDLevel2()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 16, this.bb!) : null;
};

/**
 * @returns number
 */
bidSideLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param number index
 * @param Switchboard.MDLevel2= obj
 * @returns Switchboard.MDLevel2
 */
offerSide(index: number, obj?:Switchboard.MDLevel2):Switchboard.MDLevel2|null {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new Switchboard.MDLevel2()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 16, this.bb!) : null;
};

/**
 * @returns number
 */
offerSideLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(9);
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
 * @param flatbuffers.Offset marketOffset
 */
static addMarket(builder:flatbuffers.Builder, marketOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, marketOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number feedId
 */
static addFeedId(builder:flatbuffers.Builder, feedId:number) {
  builder.addFieldInt32(3, feedId, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Long id
 */
static addId(builder:flatbuffers.Builder, id:flatbuffers.Long) {
  builder.addFieldInt64(4, id, builder.createLong(0, 0));
};

/**
 * @param flatbuffers.Builder builder
 * @param number depth
 */
static addDepth(builder:flatbuffers.Builder, depth:number) {
  builder.addFieldInt16(5, depth, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number flags
 */
static addFlags(builder:flatbuffers.Builder, flags:number) {
  builder.addFieldInt16(6, flags, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset bidSideOffset
 */
static addBidSide(builder:flatbuffers.Builder, bidSideOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, bidSideOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startBidSideVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(16, numElems, 8);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offerSideOffset
 */
static addOfferSide(builder:flatbuffers.Builder, offerSideOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, offerSideOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startOfferSideVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(16, numElems, 8);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static end(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  builder.requiredField(offset, 8); // market
  return offset;
};

static create(builder:flatbuffers.Builder, sourceTs:flatbuffers.Long, sourceOffset:flatbuffers.Offset, marketOffset:flatbuffers.Offset, feedId:number, id:flatbuffers.Long, depth:number, flags:number, bidSideOffset:flatbuffers.Offset, offerSideOffset:flatbuffers.Offset):flatbuffers.Offset {
  MDSnapshotL2.start(builder);
  MDSnapshotL2.addSourceTs(builder, sourceTs);
  MDSnapshotL2.addSource(builder, sourceOffset);
  MDSnapshotL2.addMarket(builder, marketOffset);
  MDSnapshotL2.addFeedId(builder, feedId);
  MDSnapshotL2.addId(builder, id);
  MDSnapshotL2.addDepth(builder, depth);
  MDSnapshotL2.addFlags(builder, flags);
  MDSnapshotL2.addBidSide(builder, bidSideOffset);
  MDSnapshotL2.addOfferSide(builder, offerSideOffset);
  return MDSnapshotL2.end(builder);
}
}
}
