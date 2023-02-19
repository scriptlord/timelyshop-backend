import { Document } from 'mongoose';

export interface IUserSchema extends Document {
    name: string;
    email: string;
    passwordHash: string;
    phone: string;
    isAdmin: boolean;
    street: string;
    apartment: string;
    zip: string;
    city: string;
    country: string;
}
