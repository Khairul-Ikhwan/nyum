import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const merchantSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    storeName: {type: String, required: true},
    created_date: {type: Date, default: Date.now },
    country: {type: String},
    currency: {type: String},
    contact: {type: String},
    address: {type: String}
})

const Merchant = mongoose.model('Merchant', merchantSchema);

export default Merchant;