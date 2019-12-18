import express from 'express';
import MusicsController from '../controllers/Musics.js';

const router = express.Router();

router.get('/', MusicsController.list);
router.post('/', MusicsController.create);
router.get('/:id', MusicsController.show);
router.put('/:id', MusicsController.update);
router.delete('/:id', MusicsController.delete);

export default router;
