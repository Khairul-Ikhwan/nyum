import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const variantSchema = new mongoose.Schema({
    variantName: {type: String, required: true},
})

const productSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    created_date: {type: Date, default: Date.now},
    name: {type: String, required: true},
    price: {type: Number},
    img_url: {type: String},
    description: {type: String},
    variants: [variantSchema],
});

const Product = mongoose.model('Product', productSchema);

export default Product