import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderModel extends Document {
  orderId: number;
  orderNumber: string;
  value: number;
  dealId: number;
  orgName?: string;
  personName?: string;
}

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
    dealId: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    personName: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IOrderModel>('Order', OrderSchema);
