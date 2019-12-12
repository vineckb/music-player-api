import ProfileController from '../controllers/Profile';
import express from 'express';

const router = express.Router();

router.get('/', ProfileController.get);
router.put('/', ProfileController.update);

export default router;