import {Request,Response} from 'express'
import prisma from '../config/index'


export const getAllUsers = async(req: Request, res: Response)=>{
    const users = await prisma.user.findMany()
    return res.status(200).json(users)
    
}

export const getUser = async(req: Request, res: Response)=>{
    const {id} = req.params
    const user = await prisma.user.findFirst({
        where:{
            id: Number(id)
        }
    })
    if(!user){
        return res.status(404).json({error: 'User not found'})
    }
    return res.status(200).json(user)

}

export const updateUser = async(req: Request, res: Response)=>{
    const {id} = req.params
    const {name,email,password} = req.body
    const user = await prisma.user.update({
        where:{
            id: Number(id)
        },
        data:{
            name: name,
            email: email,
            password: password
        }
    })
    return res.status(200).json(user)
}

export const deleteUser = async(req: Request, res: Response)=>{   
    const {id} = req.params
    const user = await prisma.user.delete({
        where:{
            id: Number(id)
        }
    })
    return res.status(200).json(user)
}