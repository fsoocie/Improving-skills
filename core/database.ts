import {config} from 'dotenv'; config()
import mongoose from 'mongoose'

mongoose.connect(process.env.mongoUri || 'mongodb+srv://fsoocie:windra1110ixxx@improving-skills-cluste.9wrk9.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const database = mongoose.connection
database.on('error', console.error.bind(console, 'MongoDB connection error'))
export default database
