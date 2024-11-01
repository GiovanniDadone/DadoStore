const { connectDB } = require('../config/db.config');

// Get all products
const getProducts = async (req, res) => {
    try {
        const db = await connectDB();
        const products = await db.collection('products').find({}).toArray();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
};

// Get single product by ID
const getProductById = async (req, res) => {
    try {
        const db = await connectDB();
        const product = await db.collection('products').findOne({ _id: req.params.id });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product" });
    }
};

module.exports = { getProducts, getProductById };
