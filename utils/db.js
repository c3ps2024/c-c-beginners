// utils/db.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export async function connectDB() {
  return await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });
}
