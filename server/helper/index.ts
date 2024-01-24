import bcrypt from 'bcryptjs'
import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const secretkey = process.env.SECRET_KEY as string

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // You can adjust the number of salt rounds based on your security requirements

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
}


export const check = async(req:Request, res:Response) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'You need to login first' });
    }
    try {
      const decoded = jwt.verify(token, secretkey);
      return res.status(200).json(decoded);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
}