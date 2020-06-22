// automatically generated by the FlatBuffers compiler, do not modify

import * as NS17503805021538163740 from "./Enum_generated";
/**
 * @constructor
 */
export namespace PlatformApi{
export class LiquidationOrder {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns LiquidationOrder
 */
__init(i:number, bb:flatbuffers.ByteBuffer):LiquidationOrder {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param LiquidationOrder= obj
 * @returns LiquidationOrder
 */
static getRoot(bb:flatbuffers.ByteBuffer, obj?:LiquidationOrder):LiquidationOrder {
  return (obj || new LiquidationOrder()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param LiquidationOrder= obj
 * @returns LiquidationOrder
 */
static getSizePrefixedRoot(bb:flatbuffers.ByteBuffer, obj?:LiquidationOrder):LiquidationOrder {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new LiquidationOrder()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
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
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
orderId():string|null
orderId(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
orderId(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
flags():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
};

/**
 * @returns PlatformApi.Side
 */
side():NS17503805021538163740.PlatformApi.Side {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : NS17503805021538163740.PlatformApi.Side.None;
};

/**
 * @returns number
 */
qty():number {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
price():number {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Builder builder
 */
static start(builder:flatbuffers.Builder) {
  builder.startObject(8);
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
 * @param flatbuffers.Offset orderIdOffset
 */
static addOrderId(builder:flatbuffers.Builder, orderIdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, orderIdOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number flags
 */
static addFlags(builder:flatbuffers.Builder, flags:number) {
  builder.addFieldInt16(4, flags, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param PlatformApi.Side side
 */
static addSide(builder:flatbuffers.Builder, side:NS17503805021538163740.PlatformApi.Side) {
  builder.addFieldInt8(5, side, NS17503805021538163740.PlatformApi.Side.None);
};

/**
 * @param flatbuffers.Builder builder
 * @param number qty
 */
static addQty(builder:flatbuffers.Builder, qty:number) {
  builder.addFieldFloat64(6, qty, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number price
 */
static addPrice(builder:flatbuffers.Builder, price:number) {
  builder.addFieldFloat64(7, price, 0.0);
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

static create(builder:flatbuffers.Builder, sourceTs:flatbuffers.Long, sourceOffset:flatbuffers.Offset, marketOffset:flatbuffers.Offset, orderIdOffset:flatbuffers.Offset, flags:number, side:NS17503805021538163740.PlatformApi.Side, qty:number, price:number):flatbuffers.Offset {
  LiquidationOrder.start(builder);
  LiquidationOrder.addSourceTs(builder, sourceTs);
  LiquidationOrder.addSource(builder, sourceOffset);
  LiquidationOrder.addMarket(builder, marketOffset);
  LiquidationOrder.addOrderId(builder, orderIdOffset);
  LiquidationOrder.addFlags(builder, flags);
  LiquidationOrder.addSide(builder, side);
  LiquidationOrder.addQty(builder, qty);
  LiquidationOrder.addPrice(builder, price);
  return LiquidationOrder.end(builder);
}
}
}
