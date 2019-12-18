import express from 'express';
import UsersController from '../controllers/Users.js';

const router = express.Router();

router.get('/', UsersController.list);
router.post('/', UsersController.create);
router.get('/:id', UsersController.show);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

export default router;
