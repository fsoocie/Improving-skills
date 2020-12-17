import {model, Schema, Document} from 'mongoose'
import TaskSchema, { ITask } from './Task'
import {IDocumentUser} from './User'

export interface IColumn {
  _id: string,
  title: string,
  taskIds: ITask[]
  owner: IDocumentUser
}

export type IDocumentColumn = IColumn & Document

const schema = new Schema<IDocumentColumn>({
  title: {
    type: String,
    required: true,
    default: 'Новая колонка'
  },
  taskIds: {
    type: [TaskSchema],
    required: true,
    default: []
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

export default model<IDocumentColumn>('Column', schema)
