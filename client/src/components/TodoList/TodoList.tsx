import React from 'react'
import {TodoListItem} from '../TodoListItem/TodoListItem'

interface ITodoListProps {
  column: {
    id: string,
    title: string,
    taskIds: string[]
  },
  tasks: any
}

export const TodoList: React.FC<ITodoListProps> = ({column, tasks}) => {
  return (
      <div className='todoList'>
        <div className='todoList__title'>
          <h3>{column.title}</h3>
        </div>
        <div className="todoList__content">
          {column.taskIds.map(taskId => {
            const task = tasks[taskId]
            return <TodoListItem key={task.id} task={task}/>
          })}
        </div>
      </div>
  )
}
