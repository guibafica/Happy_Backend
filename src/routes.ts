import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello Happy!' });
});

routes.post('/orphanages', OrphanagesController.create);

export default routes;