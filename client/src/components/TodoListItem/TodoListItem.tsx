import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import {ITask} from '../../store/ducks/todos/types/state'

interface ITodoListItemProps {
  task: ITask,
  index: number
}

export const TodoListItem: React.FC<ITodoListItemProps> = ({task, index}) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div className='todoListItem'
             ref={provided.innerRef}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
        >
          {task.content}
        </div>
      )}
    </Draggable>

  )
}
