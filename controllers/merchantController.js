import Merchant from "../models/merchantSchema.js";
import User from "../models/userSchema.js";

//Function to add new merchant

const addMerchant = async (req, res) => {
    try {
        const userId = req.headers['user-id'];
        console.log('User Id:', userId);

        const {storeName, country, currency, contact, address } = req.body;
        console.log('Request Body:', req.body);
        
        const newMerchant = new Merchant({ storeName, country, currency, contact, address });
        const updatedUser = await User.findByIdAndUpdate(userId, { store_id: newMerchant._id });
        console.log('Updated User:', updatedUser);
        await newMerchant.save();

        res.status(201).json({ message: 'New Merchant added!', newMerchant });
    } catch (error) {
        console.error('Error adding merchant: ', error);
        res.status(500).json({ message: 'Check Server' });
    }
};


export { addMerchant };