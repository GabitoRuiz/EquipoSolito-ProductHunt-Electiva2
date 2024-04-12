const express = require('express');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct, searchProducts } = require('../controllers/productController');
const { authenticateToken } = require('../middlewares/auth');
const { validateProductData } = require('../middlewares/product');

router.post('/newproduct', authenticateToken  ,validateProductData, createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/products/:id', searchProducts);

module.exports = router;