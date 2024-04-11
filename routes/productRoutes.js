const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');
const { authenticateToken } = require('../middlewares/auth');
const { validateProductData } = require('../middlewares/product');

router.post('/newproduct', authenticateToken  ,validateProductData, createProduct);

module.exports = router;