import express from 'express';
import ProfileController from '../controllers/Profile.js';

const router = express.Router();

router.get('/', ProfileController.get);
router.put('/', ProfileController.update);

export default router;
