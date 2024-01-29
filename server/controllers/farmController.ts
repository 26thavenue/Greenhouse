import prisma from '../config/index'
import {Request,Response} from 'express'

// ADD NEW FARM ,GET ALL USER FARM , GET A FARM BY ID, UPDATE A FARM, DELETE A FARM

export const addNewFarm = async(req: Request,res:Response) => {
    const {ownerId} = req.params

    // PROBLEM IF THE UUID CAN'T BE CONVERTED TO A NUMBER 
    const owner = await prisma.user.findUnique({
      where: { id: Number(ownerId) },
      select: { email: true }
    });
    if (!owner) return res.status(404).json({ message: "Owner not found" });
    const {name,long,lat,type,numberOfSensors,size}:{name:string,long:string,lat:string,type:string,numberOfSensors:number,size:number} = req.body
    const farm = await prisma.farm.create({
        data:{
            name: name,
            long: long,
            lat: lat,
            type: type,
            numberOfSensors: numberOfSensors,
            size: size,
            ownerId: Number(ownerId)
        } 
    })

    return res.status(201).json(farm)
    
    
}

export const getAllUserFarm = (req: Request,res:Response) => {
    
}

export const updateFarmDetails  = (req: Request,res:Response) => {
    
}

export const deleteFarm  = (req: Request,res:Response) => {
    
}