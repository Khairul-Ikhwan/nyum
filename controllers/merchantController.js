import Merchant from "../models/merchantSchema.js";
import User from "../models/userSchema.js";
import Product from "../models/productSchema.js";
import mongoose from "mongoose";

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

const addProduct = async (req, res) => {
    try {
        const merchantId = req.headers['merchant-id'];

        const {name, price, img_url, description, variants} = req.body;

        const newProduct = new Product({name, price, img_url, description, variants, merchantId});
        const updatedMerchant = await Merchant.findByIdAndUpdate(
            merchantId,
            { $push: { products: newProduct } },
            { new: true }
        );
        console.log('Updated Merchant', updatedMerchant)
        await newProduct.save();

        res.status(201).json({message: 'New Product added!', newProduct});
    } catch (error) {
        console.error('Error adding porduct', error);
        res.status(500).json({message: 'Check Server'})
    }
};

const deleteProduct = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const merchantId = req.headers['merchant-id'];
        const productId = req.params.productId;

        // Find the product to get the associated merchantId
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Ensure the product belongs to the specified merchant
        if (product.merchantId !== merchantId) {
            return res.status(403).json({ message: 'Product does not belong to the specified merchant' });
        }

        // Remove the product from the Product collection
        await Product.findOneAndDelete(productId);

        // Remove the product from the Merchant's products array
        const updatedMerchant = await Merchant.findByIdAndUpdate(
            merchantId,
            { $pull: { products: { _id: productId } } },
            { new: true }
        );

        // Check if the product was removed successfully
        if (!updatedMerchant) {
            await session.abortTransaction();
            return res.status(404).json({ message: 'Product not found in the Merchant collection' });
        }

        await session.commitTransaction();
        res.status(200).json({ message: 'Product deleted', updatedMerchant });
    } catch (error) {
        await session.abortTransaction();
        console.error('Error deleting product', error);
        res.status(500).json({ message: 'Check Server' });
    } finally {
        session.endSession();
    }
};



export { addMerchant, addProduct, deleteProduct };