import { writeFileSync } from 'fs';
import User from 'user';
import db from '../db/db.json';

const DB_LOCATION = './src/db/db.json';

export function getData(): User[] {
  return db;
}

export async function writeData(data: User[]) {
  try {
    writeFileSync(DB_LOCATION, JSON.stringify(data));
    console.log('Data written successfully');
  } catch (error) {
    console.error(error);
  }
}