import mongoose, { Schema, Document } from 'mongoose';
import { IOrderItemSchema } from '../types/orders';

const orderItemSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

export const OrderItem = mongoose.model<IOrderItemSchema>('OrderItem', orderItemSchema);

