import React from 'react'
import {ITask} from '../../store/ducks/todos/types/state'

interface ITodoListItemProps {
  task: ITask
}

export const TodoListItem: React.FC<ITodoListItemProps> = ({task}) => {
  return (
    <div className='todoListItem'>
      {task.content}
    </div>
  )
}
