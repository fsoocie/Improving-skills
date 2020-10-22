import mongoose from 'mongoose'

export default async function (afterConnection: () => void): Promise<void> {
  try {
    await mongoose.connect(process.env.mongoUri || 'mongodb+srv://fsoocie:windra1110ixxx@improving-skills-cluste.9wrk9.mongodb.net/<dbname>?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    afterConnection()
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'))
  } catch (error) {
    console.warn(error)
    process.exit(1)
  }
}
