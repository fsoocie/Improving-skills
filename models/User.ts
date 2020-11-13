import {Document, Schema, model} from "mongoose";

export interface IUser {
  _id?: string,
  password?: string,
  username: string,
  email: string | undefined,
  confirmHash?: string,
  isConfirmed?: boolean,
  googleId?: string | null
}

export type IDocumentUser = IUser & Document

const schema: Schema<IDocumentUser> = new Schema({
  password: String,
  username: {
    type: String,
    required: true,
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
    required: true,
    unique: true
  },
  googleId: String
})

export default model<IDocumentUser>('User', schema)
