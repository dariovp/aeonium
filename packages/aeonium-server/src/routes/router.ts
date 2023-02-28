import { Request, Response, Router } from "express";
import usersRouter from "./users.route";

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to /')
})

router.use('/users', usersRouter);

export default router;