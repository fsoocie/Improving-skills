import React from 'react'
import {useSelector} from 'react-redux'
import {IColumn} from '../../store/ducks/todos/types/state'
import { selectTodosTasks } from '../../store/ducks/todos/selectors'
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
        <div className="todoList__content">
          {column.taskIds.map(taskId => {
            const task = tasks.find(task => task.id === taskId)
            if (task) {
              return <TodoListItem key={task.id} task={task}/>
            }
          })}
        </div>
      </div>
  )
}
