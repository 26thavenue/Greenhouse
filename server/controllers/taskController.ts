import prisma from '../config/index'
import{Request,Response} from 'express'

export const createTasks = async(req: Request, res: Response) => {
    const {id} = req.params
    const user = await prisma.user.findFirst({
        where:{
            id: Number(id)
        }
    })
    if(!user){
        return res.status(404).json({error: 'User not found'})
    }

    const {name, description, category, dueDate} = req.body
    const task = prisma.task.create({
        data:{
            name: name,
            description: description,
            date: dueDate,
            ownerId: id
        }
    })
    return res.status(201).json(task)
}