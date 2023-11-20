import User from '../models/userSchema.js';
import Product from '../models/productSchema.js';
import Merchant from '../models/merchantSchema.js';

// Function to add a new user
const addUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = new User({ email, password, name });
    await newUser.save();
    res.status(201).json({ message: 'User added!', newUser });
  } catch (error) {
    console.error('Error adding user: ', error);
    res.status(500).json({ message: 'Check Server' });
  }
};

const addCart = async (req, res) => {
    try {
        const userId = req.headers['user-id'];
        const productId = req.params.productId;
        const foundProduct = await Product.findById(productId);
        const foundMerchant = await Merchant.findById(foundProduct.merchantId)
        const merchantName = foundMerchant.storeName
        const { variantId, quantity } = req.body;
        const foundVariant = foundProduct.variants.find(
            (variant) => variant._id === variantId
        );
        const variantName = foundVariant ? foundVariant.variantName : 'Default Variant'
        console.log(merchantName)
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $push: {
                    'cart.products': {
                        productName: foundProduct.name,
                        productId: productId,
                        merchantId: foundProduct.merchantId,
                        merchantName: merchantName,
                        variants: [{ variantName: variantName, variantId, quantity }],
                    },
                },
            },
            { new: true }
        );

        res.status(201).json({ message: 'Added to Cart', updatedUser });
    } catch (error) {
        console.error('Error adding to cart', error);
        res.status(500).json({ message: 'Check Server' });
    }
};

const getCart = async (req, res) => {
    try {
        const userId = req.headers['user-id'];
        // Retrieve the user with the cart details populated
        const user = await User.findById(userId).populate('cart.products.productId');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Extract the cart details
        const cart = user.cart[0];
        res.status(200).json({cart});
    } catch (error) {
        console.error('Error retrieving cart', error);
        res.status(500).json({ message: 'Check Server' });
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        res.status(201).json({message: "User Found", user});
    } catch (error) {
        console.error('Error finding user', error);
        res.status(500).json({message: 'Check Server'});
    }
}

const getAllUsers = async (req, res) => {
    const request = req.params.request
    
    if (request === "all"){
        try {
            const users = await User.find();
            const userCount = users.length;
            res.status(200).json({message: "Users found", userCount, users})
        } catch (error) {
            console.error('Error retrieving users', error);
            res.status(500).json({message: 'Check Server'});
        }
    } else if (request === "emails") {
        try {
            const users = await User.find().select('email name contact');
            res.status(200).json({ emails: users.map(user => ({ email: user.email, name: user.name, contact: user.contact })) });

        } catch (error) {
            console.error('Error retrieving emails, you might be a hacker!');
            res.status(500).json({message: 'Check Server'});
        }
    } 
    
    else {
        res.status(404).json({message: "Bad Request Bro"})
    }

}

export { addUser, addCart, getCart, getUser, getAllUsers };


