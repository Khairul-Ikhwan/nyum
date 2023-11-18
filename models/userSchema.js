import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid'

const userSchema = new mongoose.Schema({
    _id: {type: String, default: uuidv4},
    created_date: {type: Date, default: Date.now},
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    store_id: {type: String},
});

const User = mongoose.model('User', userSchema);

export default User;
