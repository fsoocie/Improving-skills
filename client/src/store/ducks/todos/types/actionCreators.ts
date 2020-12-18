import {Action} from 'redux'
import {IColumn, ITask, ITodosState} from './state'

export enum TodosActionTypes {
  SET_TODOS = 'todos/SET_TODOS',
  SET_COLUMNS = 'todos/SET_COLUMNS',
  ADD_TASK = 'todos/ADD_TASK',
  SET_COLUMN_TITLE = 'todos/SET_COLUMN_TITLE',
  ADD_COLUMN = 'todos/ADD_COLUMN',
  DELETE_COLUMN = 'todos/DELETE_COLUMN',
  CLEAR_COLUMN = 'todos/CLEAR_COLUMN',
  UPDATE_TASK = 'todos/UPDATE_TASK',
  DELETE_TASK = 'todos/DELETE_TASK',
  FETCH_TODOS = 'todos/FETCH_TODOS',
  FETCH_SET_COLUMNS = 'todos/FETCH_SET_COLUMNS',
  FETCH_ADD_TASK = 'todos/FETCH_ADD_TASK',
  FETCH_COLUMN_TITLE = 'todos/FETCH_COLUMN_TITLE',
  FETCH_ADD_COLUMN = 'todos/FETCH_ADD_COLUMN',
  FETCH_DELETE_COLUMN = 'todos/FETCH_DELETE_COLUMN',
  FETCH_CLEAR_COLUMN = 'todos/FETCH_CLEAR_COLUMN',
  FETCH_UPDATE_TASK = 'todos/FETCH_UPDATE_TASK',
  FETCH_DELETE_TASK = 'todos/FETCH_DELETE_TASK'
}

export interface ISetTodosAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.SET_TODOS, payload: ITodosState
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
  payload: IColumn
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
    _id: string
    content: string
  }
}

export interface IDeleteTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.DELETE_TASK
  payload: {
    _id: string,
    columnIndex: number
  }
}

export interface IFetchTodosAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_TODOS
}

export interface IFetchSetColumnsAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_SET_COLUMNS,
  payload: ITodosState['columns']
}

export interface IFetchAddTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_ADD_TASK
  payload: {
    task: ITask,
    columnIndex: number
  }
}

export interface IFetchSetColumnTitleAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_COLUMN_TITLE
  payload: {
    title: string,
    columnIndex: number
  }
}

export interface IFetchAddColumnAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_ADD_COLUMN
  payload: string
}

export interface IFetchDeleteColumnAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_DELETE_COLUMN
  payload: number
}

export interface IFetchClearColumnAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_CLEAR_COLUMN
  payload: number
}

export interface IFetchUpdateTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_UPDATE_TASK
  payload: {
    _id: string
    content: string
  }
}

export interface IFetchDeleteTaskAC extends Action<TodosActionTypes> {
  type: TodosActionTypes.FETCH_DELETE_TASK
  payload: {
    _id: string,
    columnIndex: number
  }
}

export type ITodosActionCreators =
  ISetColumnsAC | IAddTaskAC | ISetColumnTitleAC
  | IAddColumnAC | IDeleteColumnAC | IClearColumnAC
  | IUpdateTaskAC | IDeleteTaskAC | IFetchTodosAC
  | IFetchSetColumnsAC | IFetchAddTaskAC | IFetchSetColumnTitleAC
  | IFetchAddColumnAC | IFetchDeleteColumnAC | IFetchClearColumnAC
  | IFetchUpdateTaskAC | IFetchDeleteTaskAC | ISetTodosAC
