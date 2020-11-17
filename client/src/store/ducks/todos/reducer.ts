import produce, {setAutoFreeze} from 'immer'
import {ITodosActionCreators, TodosActionTypes} from './types/actionCreators'
import {IColumn, ITodosState} from './types/state'

setAutoFreeze(false)
const initialTodosState: ITodosState = {
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
}

export const todosReducer = produce((draft: ITodosState, action: ITodosActionCreators) => {
  switch (action.type) {
    case TodosActionTypes.SET_COLUMNS:
      draft.columns = action.payload
      break;
    case TodosActionTypes.ADD_TASK:
      const {task, columnIndex} = action.payload
      draft.tasks.push(task)
      draft.columns[columnIndex].taskIds.push(task.id)
      break;
    case TodosActionTypes.SET_COLUMN_TITLE:
      const {title, columnIndex: index} = action.payload
      draft.columns[index].title = title
      break;
    case TodosActionTypes.ADD_COLUMN:
      const column: IColumn = {
        id: `column-${Date.now().toString()}`,
        title: action.payload,
        taskIds: []
      }
      draft.columns.push(column)
      break;
    case TodosActionTypes.DELETE_COLUMN:
      draft.columns[action.payload].taskIds.forEach(taskId => {
        draft.tasks = draft.tasks.filter(task => task.id !== taskId)
      })
      draft.columns.splice(action.payload, 1)
      break;
    case TodosActionTypes.CLEAR_COLUMN:
      draft.columns[action.payload].taskIds.forEach(taskId => {
        draft.tasks = draft.tasks.filter(task => task.id !== taskId)
      })
      draft.columns[action.payload].taskIds = []
      break;
    case TodosActionTypes.UPDATE_TASK:
      const taskIndex = draft.tasks.findIndex(task => task.id === action.payload.id)
      draft.tasks[taskIndex] = {id: action.payload.id, content: action.payload.content}
      break;
    case TodosActionTypes.DELETE_TASK:
      const i = draft.tasks.findIndex(task => task.id === action.payload)
      draft.tasks.splice(i, 1)
      break;
  }
}, initialTodosState)
