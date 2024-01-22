import {Request, Response} from 'express'
import bcrypt from 'bcryptjs'
import { hashPassword } from '../helper'
import prisma from '../config/index'

export const register = async(req:Request, res:Response) =>{
    const {email,name,password}:{email:string,name:string,password:string}= req.body

    if(!email || !name || !password){
        return res.status(400).json({error: 'Please fill all fields'})
    }
    // ENSURE THEY FOLLOW A PARTICULAR FORMAT

    const isEmailExists = await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(isEmailExists){
        return res.status(400).json({error: 'Email already exists'})
    }

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({ 
        data:{
            name: name,
            email:email,
            password:hashedPassword,
        }

    })
    return res.status(201).json(user)
}


export const login = async(req:Request, res:Response) => {
 const {email,password}:{email:string,password:string}= req.body

  if (!email || !password ){
    return res.status(400).json({ error: 'Please provide all the necessary information' });
  }

    const user = await prisma.user.findUnique({
        where: {
        email: email,
        }, 
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Incorrect email or password' });
    }   
    return res.status(200).json(user);



}