import { Router } from 'express';
import HomeController from '../controllers/HomeController';

const router = new Router();

router.post('/', HomeController.index);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
