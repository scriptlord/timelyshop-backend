import mongoose, { Schema, Document } from 'mongoose';

import { IUserSchema } from '../types/users';


const userSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
    },
    zip :{
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    }
});

userSchema.virtual('id').get(function (this: IUserSchema) {
    return this._id.toHexString();
});

userSchema.set('toJSON', {
    virtuals: true,
});

    
    
    
export const User = mongoose.model<IUserSchema>('User', userSchema);