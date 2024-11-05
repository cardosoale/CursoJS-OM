import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Nao deveria existir
router.get('/', loginRequired, userController.index); // Lista Usuários
// router.get('/:id', userController.show); // Lista Usuário

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
