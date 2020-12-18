import {axios} from '../../core/axios'
import {IColumn, ITask, ITodosState} from '../../store/ducks/todos/types/state'
import {IResponse} from './authApi'

export const todosApi = {
  create: async (): Promise<IResponse<ITodosState>> => {
    const {data} = await axios.post<IResponse<ITodosState>>('/todos/')
    return data
  },
  updateColumns: async (payload: IColumn[]): Promise<IResponse<ITodosState['columns']>> => {
    const {data} = await axios.put('/todos/columns', {columns: payload})
    return data
  },
  get: async (): Promise<ITodosState> => {
    const {data} = await axios.get('/todos/')
    return data.data
  },
  addTask: async (task: ITask, columnIndex: number): Promise<ITodosState> => {
    const {data} = await axios.post('/todos/task', {task, columnIndex})
    return data.data
  },
  addColumn: async (column: IColumn): Promise<ITodosState> => {
    const {data} = await axios.put('/todos/column', {column})
    return data.data
  },
  columnTitle: async (title: string, columnIndex: number): Promise<ITodosState> => {
    const {data} = await axios.patch('/todos/columnTitle', {title, columnIndex})
    return data.data
  },
  clearColumn: async (columnIndex: number): Promise<ITodosState> => {
    const {data} = await axios.patch('/todos/column', {columnIndex})
    return data.data
  },
  deleteColumn: async (columnIndex: number): Promise<ITodosState> => {
    const {data} = await axios.delete(`/todos/column/${columnIndex}`)
    return data.data
  },
  updateTask: async (_id: string, content: string): Promise<ITodosState> => {
    const {data} = await axios.patch('/todos/task', {_id, content})
    return data.data
  },
  deleteTask: async (_id: string, columnIndex: number): Promise<ITodosState> => {
    const {data} = await axios.patch('/todos/deleteTask', {_id, columnIndex})
    return data.data
  }
}
