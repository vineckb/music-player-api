import express from 'express';
import AuthController from '../controllers/Auth.js';

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/login', AuthController.oneClickLogin);
router.post('/register', AuthController.oneClickLogin);
router.get('/forgot-password', AuthController.forgotPassword);

export default router;
