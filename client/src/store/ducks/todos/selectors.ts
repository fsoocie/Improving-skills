import {IRootState} from '../../store'
import {LoadingStatus} from '../../types'
import {IColumn, ITask, ITodosState} from './types/state'

export const selectTodosState = (state: IRootState): ITodosState => state.todos

export const selectTodosTasks = (state: IRootState): ITask[] => selectTodosState(state).tasks

export const selectTodosColumns = (state: IRootState): IColumn[] => selectTodosState(state).columns

export const selectTodosLoadingStatus = (state: IRootState): LoadingStatus => selectTodosState(state).loadingStatus

export const selectTodosIsLoading = (state: IRootState): boolean => selectTodosLoadingStatus(state) === LoadingStatus.LOADING
