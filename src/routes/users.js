const UsersController = require('../controllers/Users');
const express = require('express');

const router = express.Router();

router.get('/', UsersController.list);
router.post('/', UsersController.create);
router.get('/:id', UsersController.show);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

module.exports = router;