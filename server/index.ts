import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express();
const PORT = process.env.PORT as string || 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})

