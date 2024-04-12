const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/auth');
const { createReview, getProductReviews,  } = require('../controllers/commentController');

router.post('/products/:id/reviews', authenticateToken, createReview);
router.get('/products/:id/reviews', getProductReviews);

module.exports = router;