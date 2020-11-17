import {Action} from 'redux'
import {ITask, ITodosState} from './state'

export enum TodosActionTypes {
  SET_COLUMNS = 'todos/SET_COLUMNS',
  ADD_TASK = 'todos/ADD_TASK',
  SET_COLUMN_TITLE = 'todos/SET_COLUMN_TITLE',
  ADD_COLUMN = 'todos/ADD_COLUMN',
  DELETE_COLUMN = 'todos/DELETE_COLUMN',
  CLEAR_COLUMN = 'todos/CLEAR_COLUMN',
  UPDATE_TASK = 'todos/UPDATE_TASK',
  DELETE_TASK = 'todos/DELETE_TASK'
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

export interface IDeleteColumnAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.DELETE_COLUMN
  payload: number
}

export interface IClearColumnAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.CLEAR_COLUMN
  payload: number
}

export interface IUpdateTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.UPDATE_TASK
  payload: {
    id: string
    content: string
  }
}

export interface IDeleteTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.DELETE_TASK
  payload: string
}

export type ITodosActionCreators =
  ISetColumnsAC | IAddTaskAC | ISetColumnTitleAC
  | IAddColumnAC | IDeleteColumnAC | IClearColumnAC
  | IUpdateTaskAC | IDeleteTaskAC
