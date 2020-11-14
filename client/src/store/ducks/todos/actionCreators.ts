import {IAddColumnAC, IAddTaskAC, ISetColumnsAC, ISetColumnTitleAC, TodosActionTypes} from './types/actionCreators'
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
