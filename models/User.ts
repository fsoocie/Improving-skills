import {Document, Schema, model} from "mongoose";

interface IUser extends Document {
  password: string,
  username: string,
  email: string,
  confirmHash?: string
  isConfirmed?: boolean,
}

const schema: Schema = new Schema({
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isConfirmed: {
    type: Boolean,
    default: false
  },
  confirmHash: {
    type: String,
    unique: true
  }
})

export default model<IUser>('User', schema)
