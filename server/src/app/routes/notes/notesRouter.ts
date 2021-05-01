import { Router } from 'express';

import { RoutesOptionsType } from '@types';
import { UserController } from '../controllers/user.controller';

export const router = Router();

router.use('/user');
router.use('/notes');
router.use('/user');

export const routes = ({ app }: RoutesOptionsType) => {
  app.get('/api/user', (req, res) => {
    const user = UserController.createUser();

    res.send(user);
  });
};
