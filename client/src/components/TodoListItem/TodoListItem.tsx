import React from 'react'

interface ITodoListItemProps {
  task: {
    id: string,
    content: string
  }
}

export const TodoListItem: React.FC<ITodoListItemProps> = ({task}) => {
  return (
    <div className='todoListItem'>
      {task.content}
    </div>
  )
}
