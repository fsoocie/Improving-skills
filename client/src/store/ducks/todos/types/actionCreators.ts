import {Action} from 'redux'
import {ITodosState} from './state'

export interface ISetColumnsAC extends Action{
  payload: ITodosState['columns']
}
