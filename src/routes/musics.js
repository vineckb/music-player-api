const MusicsController = require('../controllers/Musics');
const express = require('express');

const router = express.Router();

router.get('/', MusicsController.list);
router.post('/', MusicsController.create);
router.get('/:id', MusicsController.show);
router.put('/:id', MusicsController.update);
router.delete('/:id', MusicsController.delete);

module.exports = router;