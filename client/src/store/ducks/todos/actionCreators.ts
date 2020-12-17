import {
  IAddColumnAC,
  IAddTaskAC,
  IClearColumnAC,
  IDeleteColumnAC,
  IDeleteTaskAC,
  IFetchAddColumnAC,
  IFetchAddTaskAC,
  IFetchClearColumnAC,
  IFetchColumnsAC,
  IFetchDeleteColumnAC,
  IFetchDeleteTaskAC,
  IFetchSetColumnsAC,
  IFetchSetColumnTitleAC,
  IFetchUpdateTaskAC,
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

export const fetchColumns = (): IFetchColumnsAC => {
  return {type: TodosActionTypes.FETCH_COLUMNS}
}

export const fetchSetColumns = (newColumnsState: ITodosState['columns']): IFetchSetColumnsAC => {
  return {type: TodosActionTypes.FETCH_SET_COLUMNS, payload: newColumnsState}
}

export const fetchAddTask = (task: ITask, columnIndex: number): IFetchAddTaskAC => {
  return {type: TodosActionTypes.FETCH_ADD_TASK, payload: {columnIndex, task}}
}

export const fetchSetColumnTitle = (columnIndex: number, title: string): IFetchSetColumnTitleAC => {
  return {type: TodosActionTypes.FETCH_COLUMN_TITLE, payload: {columnIndex, title}}
}

export const fetchAddColumn = (title: string): IFetchAddColumnAC => {
  return {type: TodosActionTypes.FETCH_ADD_COLUMN, payload: title}
}

export const fetchDeleteColumn = (colIndex: number): IFetchDeleteColumnAC => {
  return {type: TodosActionTypes.FETCH_DELETE_COLUMN, payload: colIndex}
}

export const fetchClearColumn = (colIndex: number): IFetchClearColumnAC => {
  return {type: TodosActionTypes.FETCH_CLEAR_COLUMN, payload: colIndex}
}

export const fetchUpdateTask = (id: string, content: string): IFetchUpdateTaskAC => {
  return {type: TodosActionTypes.FETCH_UPDATE_TASK, payload: {id, content}}
}

export const fetchDeleteTask = (id: string): IFetchDeleteTaskAC => {
  return {type: TodosActionTypes.FETCH_DELETE_TASK, payload: id}
}
