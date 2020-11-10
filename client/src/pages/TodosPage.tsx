import React from 'react'
import { TodoList } from '../components/TodoList/TodoList';
import '../styles/Todos/TodosPage.scss'
import initialData from '../assets/initialData'

interface IColumn {
  id: string,
  title: string,
  taskIds: string[]
}

interface IState {
  columns: {
    [k: string]: {
      id: string,
      title: string,
      taskIds: string[]
    }
  },
  tasks: {
    'task-1': {
      id: string,
      content: string
    },
    'task-2': {
      id: string,
      content: string
    },
    'task-3': {
      id: string,
      content: string
    }
  },
  columnsOrder: string[]
}

export const TodosPage = () => {

  const state: IState = initialData

  return (
    <div className='todosPage'>
      <div className="todoListsWrapper">
        {state.columnsOrder.map((colId) => {
          const column:IColumn = state.columns[colId]
          const tasks = state.tasks

          return <TodoList key={column.id} column={column} tasks={tasks}/>
        })}
      </div>
    </div>
  )
}
