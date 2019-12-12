import UsersController from '../controllers/Users';
import express from 'express';

const router = express.Router();

router.get('/', UsersController.list);
router.post('/', UsersController.create);
router.get('/:id', UsersController.show);
router.put('/:id', UsersController.update);
router.delete('/:id', UsersController.delete);

export default router;