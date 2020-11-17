import {
  IAddColumnAC,
  IAddTaskAC,
  IClearColumnAC,
  IDeleteColumnAC,
  IDeleteTaskAC,
  ISetColumnsAC,
  ISetColumnTitleAC,
  IUpdateTaskAC,
  TodosActionTypes
} from './types/actionCreators'
import {ITask, ITodosState} from './types/state'

export const setColumns = (newColumnsState: ITodosState['columns']): ISetColumnsAC => {
  return {type: TodosActionTypes.SET_COLUMNS, payload: newColumnsState}
}

export const addTask = (task: ITask, columnIndex: number): IAddTaskAC => {
  return {type: TodosActionTypes.ADD_TASK, payload: {columnIndex, task}}
}

export const setColumnTitle = (columnIndex: number, title: string): ISetColumnTitleAC => {
  return {type: TodosActionTypes.SET_COLUMN_TITLE, payload: {columnIndex, title}}
}

export const addColumn = (title: string): IAddColumnAC => {
  return {type: TodosActionTypes.ADD_COLUMN, payload: title}
}

export const deleteColumn = (colIndex: number): IDeleteColumnAC => {
  return {type: TodosActionTypes.DELETE_COLUMN, payload: colIndex}
}

export const clearColumn = (colIndex: number): IClearColumnAC => {
  return {type: TodosActionTypes.CLEAR_COLUMN, payload: colIndex}
}

export const updateTask = (id: string, content: string): IUpdateTaskAC => {
  return {type: TodosActionTypes.UPDATE_TASK, payload: {id, content}}
}

export const deleteTask = (id: string): IDeleteTaskAC => {
  return {type: TodosActionTypes.DELETE_TASK, payload: id}
}
