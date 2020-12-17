import {config} from 'dotenv'; config()
import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.routes'
import todosRoutes from './routes/todos.routes'
import connect from './core/database'
import {passport} from "./core/passport";

const app: express.Application = express()
app.use(express.json())
app.use(passport.initialize())

app.use('/auth', authRoutes)
app.use('/todos', todosRoutes)

connect(() => {
  const PORT = process.env.PORT || 5000
  mongoose.connection.on('disconnected', connect)
  app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
  })
})

