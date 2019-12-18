import express from 'express';
import PlaylistsController from '../controllers/Playlists.js';

const router = express.Router();

router.get('/', PlaylistsController.list);
router.post('/', PlaylistsController.create);
router.get('/:id', PlaylistsController.show);
router.put('/:id', PlaylistsController.update);
router.delete('/:id', PlaylistsController.delete);

router.post('/:id/:musicId', PlaylistsController.addMusic);
router.delete('/:id/:musicId', PlaylistsController.removeMusic);

export default router;
