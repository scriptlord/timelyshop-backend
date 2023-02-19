import mongoose, { Schema, Document } from 'mongoose';
import { ICategorySchema } from '../types/categories';

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
    },
    color: { 
        type: String,
    }
});

categorySchema.virtual('id').get(function (this: ICategorySchema) {
    return this._id.toHexString();
});

categorySchema.set('toJSON', {
    virtuals: true,
});

export const Category = mongoose.model('Category', categorySchema);


