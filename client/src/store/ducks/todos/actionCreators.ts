import {ISetColumnsAC} from './types/actionCreators'
import {ITodosState} from './types/state'

export const setColumns = (newColumnsState: ITodosState['columns']): ISetColumnsAC => {
  return {type: 'SET_COLUMNS', payload: newColumnsState}
}
