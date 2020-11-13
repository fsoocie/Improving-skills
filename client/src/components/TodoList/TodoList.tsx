import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import {useSelector} from 'react-redux'
import {IColumn} from '../../store/ducks/todos/types/state'
import {selectTodosTasks} from '../../store/ducks/todos/selectors'
import {TodoListItem} from '../TodoListItem/TodoListItem'

interface ITodoListProps {
  column: IColumn,
}

export const TodoList: React.FC<ITodoListProps> = ({column}) => {

  const tasks = useSelector(selectTodosTasks)

  return (
    <div className='todoList'>
      <div className='todoList__title'>
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
  )
}


