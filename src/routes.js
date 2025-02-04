import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SesssionController from './app/controllers/SesssionController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SesssionController.store);
routes.post('/products', ProductController.store);

export default routes;