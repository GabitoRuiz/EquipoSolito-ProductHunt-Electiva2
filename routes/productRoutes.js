const express = require('express');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct, searchProducts } = require('../controllers/productController');
const { authenticateToken } = require('../middlewares/auth');
const { validateProductData } = require('../middlewares/product');

router.post('/newproduct', authenticateToken  ,validateProductData, createProduct);
router.put('/updateproducts/:id', updateProduct);
router.delete('/deleteproducts/:id', deleteProduct);
router.get('/searchproducts/:id', searchProducts);

module.exports = router;