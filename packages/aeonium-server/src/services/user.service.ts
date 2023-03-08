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

async function addUser(newUser: User) {
  if (!await exists(newUser.id)) {
    let newDB: User[] = db;
    newDB.push(newUser);
    writeData(newDB)
  } else {
    throw new Error("User already exists");

  }
}

async function exists(id: number) {
  let userFound: User | undefined = undefined;
  userFound = db.find((potential: User) => {
    return (potential.id === id);
  });

  if (userFound !== undefined) {
    return true;
  }
  return false;
}

export default {
  getAll,
  getById,
  deleteUser,
  addUser
}