import express from 'express'
import {getAllUsers, getUser, updateUser, deleteUser} from '../controllers/userController'

const router = express.Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router