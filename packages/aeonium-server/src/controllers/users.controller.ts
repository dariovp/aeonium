import { Request, Response } from "express";
import User from "user";
import userService from "../services/user.service";


async function get(_req: Request, res: Response) {
  let users: User[] = await userService.getAll();
  res.status(200).json(users);
}

async function getById(req: Request, res: Response) {

  let { userId } = req.params;

  let user = await userService.getById(parseInt(userId));

  if (user === null) {
    res.status(404).send();
  } else {
    res.status(200).send(user);
  }
}

async function deletebyId(req: Request, res: Response) {

  let { userId } = req.params;

  try {
    let user = await userService.deleteUser(parseInt(userId));
    res.status(204).send(user);
  } catch (error) {
    res.status(404).send();
  }
}

export default {
  get,
  getById,
  deletebyId
}