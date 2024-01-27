import bcrypt from 'bcryptjs'
import {Request, Response, NextFunction} from 'express'
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

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
//   return next();
    if (!req.headers || !req.headers.authorization){
        return res.status(401).send({ message: 'No authorization headers.' });
    }
    

    const token_bearer = req.headers.authorization.split(' ');
    if(token_bearer.length != 2){
        return res.status(401).send({ message: 'Malformed token.' });
    }
    
    const token = token_bearer[1];
    return jwt.verify(token, secretkey , (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
      }
      return next();
    });
}
