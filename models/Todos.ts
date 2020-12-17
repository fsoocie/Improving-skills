import {model, Schema, Document} from 'mongoose'
import {IDocumentUser} from './User'

interface ITask {
  _id: string,
  content: string,
}

interface IColumn {
  _id: string,
  title: string,
  taskIds: ITask[]
}

interface ITodos {
  tasks: ITask[],
  columns: IColumn[],
  owner: IDocumentUser
}

type IDocumentTodos = ITodos & Document

const schema = new Schema<IDocumentTodos>({
  tasks: {
    type: Array,
    default: [],
    required: true
  },
  columns: {
    type: Array,
    default: [],
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

export default model<IDocumentTodos>('Todos', schema)
