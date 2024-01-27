// export const errorHandler((err, req, res, next) => {}
// export const isAdmin = (req, res, next) => {}
import { Request,Response,NextFunction } from "express";
import dotenv from 'dotenv'
import jwt from'jsonwebtoken'

dotenv.config()

const secretKey = process.env.SECRET_KET as string

export function requireAuth(req: Request, res: Response, next: NextFunction) {
//   return next();
    if (!req.headers || !req.headers.authorization){
        return res.status(401).send({ message: 'No authorization headers.' });
    }
    

    const token_bearer = req.headers.authorization.split(' ');
    if(token_bearer.length != 2){
        return res.status(401).send({ message: 'Malformed token.' });
    }
    
    const token = token_bearer[1];
    return jwt.verify(token, secretKey , (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
      }
      return next();
    });
}
