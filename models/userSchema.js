import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const variantSchema = new mongoose.Schema({
    variantId: {type: String, required: true},
    variantName: {type: String},
    quantity: {type: Number},
})

const cartSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    created_date: {type: Date, default: Date.now},
    cart_owner: {type: String},
    products: [
        {   
            merchantId: {type: String},
            merchantName: {type: String},
            productId: { type: String, required: true },
            productName: {type: String},
            variants: [variantSchema],
        }
    ],
});

const userSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    created_date: {type: Date, default: Date.now, index: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    store_id: {type: String},
    cart: [cartSchema]
});

const User = mongoose.model('User', userSchema);

export default User;
