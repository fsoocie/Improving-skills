import {config} from 'dotenv'; config()
import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.routes'
import connect from './core/database'

const app: express.Application = express()
app.use(express.json())
app.use('/auth', authRoutes)

connect(() => {
  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
  })
})
mongoose.connection.on('disconnected', connect)

// TODO: JWT authentication
// TODO: validation

