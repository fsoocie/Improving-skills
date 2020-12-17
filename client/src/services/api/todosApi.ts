import {axios} from '../../core/axios'
import {IColumn, ITodosState} from '../../store/ducks/todos/types/state'
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
  }
}
