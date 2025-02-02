import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
    const user = await User.create({ 
        name: 'John Doe', 
        email: 'johndoe@example.com',
        password_hash: 'sldkfjsoij8894jd',
    });

    return response.status(201).json(user);
});

export default routes;