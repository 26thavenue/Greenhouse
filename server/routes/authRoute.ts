import express from 'express'
import {register,login,check} from '../controllers/authController'

const router = express.Router() 

router.post('/auth/register', register)
router.get('/auth/check', check)
router.post('/auth/login', login)

export default router