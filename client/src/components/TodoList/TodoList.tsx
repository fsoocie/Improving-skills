import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {useSelector} from 'react-redux'
import {IColumn} from '../../store/ducks/todos/types/state'
import {selectTodosTasks} from '../../store/ducks/todos/selectors'
import {TodoListItem} from '../TodoListItem/TodoListItem'

interface ITodoListProps {
  column: IColumn,
  index: number
}

export const TodoList: React.FC<ITodoListProps> = ({column, index}) => {

  const tasks = useSelector(selectTodosTasks)

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <div className='todoList'
             {...provided.draggableProps}
             ref={provided.innerRef}
        >
          <div className='todoList__title'
               {...provided.dragHandleProps}
          >
            <h3>{column.title}</h3>
          </div>
          <Droppable droppableId={column.id} type={'task'}>
            {provided => (
              <div className="todoList__content"
                   {...provided.droppableProps}
                   ref={provided.innerRef}
              >
                {column.taskIds.map((taskId, index) => {
                  const task = tasks.find(task => task.id === taskId)
                  if (task) {
                    return <TodoListItem key={task.id} task={task} index={index}/>
                  }
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>

  )
}


