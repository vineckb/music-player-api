import MusicsController from '../controllers/Musics';
import express from 'express';

const router = express.Router();

router.get('/', MusicsController.list);
router.post('/', MusicsController.create);
router.get('/:id', MusicsController.show);
router.put('/:id', MusicsController.update);
router.delete('/:id', MusicsController.delete);

export default router;