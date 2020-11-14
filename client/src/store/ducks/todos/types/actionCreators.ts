import {Action} from 'redux'
import {ITask, ITodosState} from './state'

export enum TodosActionTypes {
  SET_COLUMNS = 'todos/SET_COLUMNS',
  ADD_TASK = 'todos/ADD_TASK',
  SET_COLUMN_TITLE = 'todos/SET_COLUMN_TITLE',
  ADD_COLUMN = 'todos/ADD_COLUMN'
}


export interface ISetColumnsAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.SET_COLUMNS
  payload: ITodosState['columns']
}

export interface IAddTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.ADD_TASK
  payload: {
    task: ITask,
    columnIndex: number
  }
}

export interface ISetColumnTitleAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.SET_COLUMN_TITLE
  payload: {
    title: string,
    columnIndex: number
  }
}

export interface IAddColumnAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.ADD_COLUMN
  payload: string
}

export type ITodosActionCreators =
  ISetColumnsAC | IAddTaskAC | ISetColumnTitleAC | IAddColumnAC
