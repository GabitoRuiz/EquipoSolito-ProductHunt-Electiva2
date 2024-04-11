const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/userController');
const { validateSignupData } = require('../middlewares/user');

router.post('/signup', validateSignupData, signup);
router.post('/login', login);

module.exports = router;