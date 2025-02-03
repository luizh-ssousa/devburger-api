import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SesssionController from './app/controllers/SesssionController';


const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SesssionController.store);

export default routes;