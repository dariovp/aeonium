import User from 'user';
import db from '../db/db.json';
import { writeData } from './database.service';


async function getAll() {
  return db;
}

async function getById(id: number): Promise<User | null> {
  const users: User[] = db
  let user: User | undefined = undefined;

  users.forEach(function (item: User) {
    if (item.id === id) {
      user = item;
    }
  })

  if (user === undefined) {
    return null;
  } else {
    return user;
  }
}

async function deleteUser(id: number) {
  if (id === 1) throw new Error("Cannot delete admin!");

  let newDB: User[] = db.filter((item: User) => {
    return (item.id !== id);
  });
  writeData(newDB);
}

export default {
  getAll,
  getById,
  deleteUser
}