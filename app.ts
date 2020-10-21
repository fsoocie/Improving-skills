import {config} from 'dotenv'; config()
import express from 'express'
import authRoutes from './routes/auth.routes'
import './core/database'

const app: express.Application = express()
app.use(express.json())
app.use('/auth', authRoutes)

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}`)
})
