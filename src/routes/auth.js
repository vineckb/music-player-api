const AuthController = require('../controllers/Auth');
const express = require('express');

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/login', AuthController.oneClickLogin);
router.post('/register', AuthController.oneClickLogin);
router.get('/forgot-password', AuthController.forgotPassword);

module.exports = router;