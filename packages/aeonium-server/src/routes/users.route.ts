import express from 'express';

import usersController from '../controllers/users.controller';

const usersRouter = express.Router();

usersRouter.get('/', usersController.get);
usersRouter.get('/:userId', usersController.getById);
usersRouter.delete('/:userId', usersController.deletebyId);
usersRouter.post('/', usersController.addUser);

export default usersRouter;