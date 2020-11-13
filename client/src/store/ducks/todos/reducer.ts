import produce, {setAutoFreeze} from 'immer'
import {ITodosState} from './types/state'
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
    }
  ],
  columns: [
    {
      id: 'column-1',
      title: 'Example Title1',
      taskIds: ['task-1', 'task-3']
    },
    {
      id: 'column-2',
      title: 'Example Title2',
      taskIds: ['task-2']
    },
    {
      id: 'column-3',
      title: 'Example Title3',
      taskIds: []
    }
  ],
  columnsOrder: ['column-1', 'column-2', 'column-3']
}

export const todosReducer = produce((draft, action) => {
  switch (action.type) {
    case 'SET_COLUMNS':
      draft.columns = action.payload
  }
}, initialTodosState)
