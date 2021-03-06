import {config} from 'dotenv'; config()
import express from 'express'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.routes'
import todosRoutes from './routes/todos.routes'
import activitiesRoutes from './routes/activities.routes'
import skillsRoutes from './routes/skills.routes'
import uploadRoutes from './routes/upload.routes'
import connect from './core/database'
import {passport} from "./core/passport";
import cors from 'cors'
import path from 'path'

const app: express.Application = express()
app.use(express.json())
app.use(passport.initialize())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/todos', todosRoutes)
app.use('/skills', skillsRoutes)
app.use('/activities', activitiesRoutes)
app.use('/upload', uploadRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

connect(() => {
  const PORT = process.env.PORT || 5000
  mongoose.connection.on('disconnected', connect)
  app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
  })
})

