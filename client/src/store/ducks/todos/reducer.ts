import produce, {setAutoFreeze} from 'immer'
import {LoadingStatus} from '../../types'
import {ITodosActionCreators, TodosActionTypes} from './types/actionCreators'
import {ITodosState} from './types/state'

setAutoFreeze(false)
/*const initialTodosState: ITodosState = {
  tasks: [
    {
      id: 'task-1',
      content: 'task-1 text'
    },
    {
      id: 'task-2',
      content: 'task-2 text'
    },
    {
      id: 'task-3',
      content: 'task-3 text'
    },
    {
      id: 'task-4',
      content: 'task-4 text'
    }
  ],
  columns: [
    {
      id: 'column-1',
      title: 'Первая колонка',
      taskIds: ['task-1', 'task-3', 'task-4']
    },
    {
      id: 'column-2',
      title: 'Вторая колонка',
      taskIds: ['task-2']
    },
    {
      id: 'column-3',
      title: 'Третья колонка',
      taskIds: []
    }
  ],
}*/

const initialTodosState: ITodosState = {
  tasks: [],
  columns: [],
  loadingStatus: LoadingStatus.NEVER
}

export const todosReducer = produce((draft: ITodosState, action: ITodosActionCreators) => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case TodosActionTypes.SET_TODOS:
      draft.columns = action.payload.columns
      draft.tasks = action.payload.tasks
      draft.loadingStatus = LoadingStatus.LOADED
      break;
    case TodosActionTypes.SET_COLUMNS:
      draft.columns = action.payload
      break;
    case TodosActionTypes.ADD_TASK:
      const {task, columnIndex} = action.payload
      draft.tasks.push(task)
      draft.columns[columnIndex].taskIds.push(task._id)
      break;
    case TodosActionTypes.SET_COLUMN_TITLE:
      const {title, columnIndex: index} = action.payload
      draft.columns[index].title = title
      break;
    case TodosActionTypes.ADD_COLUMN:
      draft.columns.push(action.payload)
      break;
    case TodosActionTypes.DELETE_COLUMN:
      draft.columns[action.payload].taskIds.forEach(taskId => {
        draft.tasks = draft.tasks.filter(task => task._id !== taskId)
      })
      draft.columns.splice(action.payload, 1)
      break;
    case TodosActionTypes.CLEAR_COLUMN:
      draft.columns[action.payload].taskIds.forEach(taskId => {
        draft.tasks = draft.tasks.filter(task => task._id !== taskId)
      })
      draft.columns[action.payload].taskIds = []
      break;
    case TodosActionTypes.UPDATE_TASK:
      const taskIndex = draft.tasks.findIndex(task => task._id === action.payload._id)
      draft.tasks[taskIndex] = {_id: action.payload._id, content: action.payload.content}
      break;
    case TodosActionTypes.DELETE_TASK:
      draft.tasks = draft.tasks.filter(task => task._id !== action.payload._id)
      const newTaskIds = draft.columns[action.payload.columnIndex].taskIds.filter(taskId => taskId !== action.payload._id)
      draft.columns[action.payload.columnIndex].taskIds = newTaskIds
      break;
  }
}, initialTodosState)
