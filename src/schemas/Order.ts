import mongoose, { Schema, Document } from 'mongoose';

type Order = Document;

const OrderSchema = new Schema(
  {
    orderId: {
      type: Number,
      required: true,
    },
    orderNumber: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    orgName: {
      type: String,
      required: false,
    },
    personName: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<Order>('Order', OrderSchema);
