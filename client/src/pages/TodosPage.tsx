import React from 'react'
import {useSelector} from 'react-redux'
import { TodoList } from '../components/TodoList/TodoList';
import {selectTodosColumns, selectTodosColumnsOrder} from '../store/ducks/todos/selectors'
import '../styles/Todos/TodosPage.scss'

export const TodosPage = () => {

  const columnsOrder = useSelector(selectTodosColumnsOrder)
  const columns = useSelector(selectTodosColumns)

  return (
    <div className='todosPage'>
      <div className="todoListsWrapper">
        {columnsOrder.map((colId) => {
          const column = columns.find(column => column.id === colId)

          if (column) {
            return <TodoList key={column.id} column={column}/>
          }
        })}
      </div>
    </div>
  )
}
