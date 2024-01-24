import prisma from '../config/index'
import{Request,Response} from 'express'

// export const addIncome = async(req: Request, res: Response)=>{
//     const {amount, description, category, date} = req.body
//     const income = await prisma.income.create({
//         data:{
//             amount: amount,
//             description: description,
//             category: category,
//             date: date,
//         }
//     })
//     return res.status(201).json(income)
// }