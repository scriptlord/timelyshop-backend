import mongoose, { Document } from 'mongoose';

export interface IOrderItemSchema extends Document {
    quantity:number,
    product: mongoose.Types.ObjectId
}


export interface IOrderSchema extends Document {
    orderItems: Array<mongoose.Types.ObjectId>;
    shippingAddress1: string;
    shippingAddress2?: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    status: string;
    totalPrice?: number;
    user?: mongoose.Types.ObjectId;
    dateOrdered?: Date;
    id: string;
}