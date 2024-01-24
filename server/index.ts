import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './routes/authRoute'
import userRouter from './routes/userRoutes'
import bodyParser from 'body-parser'
dotenv.config()

const app = express();
const PORT = process.env.PORT as string || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', authRouter)
app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})

