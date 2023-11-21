import Product from "../models/productSchema.js";

const getAll = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the page number from the query parameters, default to 1
    const pageSize = parseInt(req.query.pageSize) || 10; // Set the page size, default to 10

    try {
        const skip = (page - 1) * pageSize; // Calculate the number of documents to skip
        const products = await Product.find().skip(skip).limit(pageSize); // Query the database

        const productCount = await Product.countDocuments(); // Get the total number of products

        res.status(200).json({ page, pageSize, productCount, products });
    } catch (error) {
        res.status(404).json("Error! ", error);
    }
};

export { getAll };
