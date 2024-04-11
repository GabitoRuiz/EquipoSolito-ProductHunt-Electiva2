const Product = require('../models/Products');

async function createProduct(req, res) {
    try {
        const { name, description, url, tags} = req.body;
        const userId = req.user._id;
        const newProduct = new Product({ name, description, url, tags, userId});

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createProduct };