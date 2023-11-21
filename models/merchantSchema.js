import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import Product from "./productSchema.js";

const merchantSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    storeName: { type: String, required: true },
    logo_url: {type: String},
    created_date: { type: Date, default: Date.now },
    country: { type: String },
    currency: { type: String },
    contact: { type: String },
    address: { type: String },
    products: [{ type: mongoose.Schema.Types.Mixed, ref: Product }]  // Use Schema.Types.Mixed for flexibility
});

const Merchant = mongoose.model('Merchant', merchantSchema);

export default Merchant;
