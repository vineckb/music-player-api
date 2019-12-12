import AuthController from '../controllers/Auth';
import express from 'express';

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/login', AuthController.oneClickLogin);
router.post('/register', AuthController.oneClickLogin);
router.get('/forgot-password', AuthController.forgotPassword);

export default router;