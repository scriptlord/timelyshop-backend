import { Document } from 'mongoose';

export interface ICategorySchema extends Document {
    name: string;
    icon: string;
    color: string;
}