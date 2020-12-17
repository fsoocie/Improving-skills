import {model, Schema, Document} from 'mongoose'
import {IUser} from './User'

export interface ITask {
  _id: string,
  content: string,
  owner: IUser
}

export type IDocumentTask = ITask & Document

const schema: Schema<IDocumentTask> = new Schema ({
  content: {
    required: true,
    type: String
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model<IDocumentTask>('Task', schema)
