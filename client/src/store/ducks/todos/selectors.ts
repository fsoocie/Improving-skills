import { IRootState } from "../../store"
import {IColumn, IColumnsOrder, ITask, ITodosState} from './types/state'

export const selectTodosState = (state: IRootState): ITodosState => state.todos

export const selectTodosTasks = (state: IRootState): ITask[] => selectTodosState(state).tasks

export const selectTodosColumns = (state: IRootState): IColumn[] => selectTodosState(state).columns

export const selectTodosColumnsOrder = (state: IRootState): IColumnsOrder => selectTodosState(state).columnsOrder
