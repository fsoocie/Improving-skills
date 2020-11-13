import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TodoList} from '../components/TodoList/TodoList'
import {setColumns} from '../store/ducks/todos/actionCreators'
import {selectTodosColumns, selectTodosColumnsOrder} from '../store/ducks/todos/selectors'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
import '../styles/Todos/TodosPage.scss'
import {getNewColumns, getNewColumnsState} from '../utils/DNDHelper'

export const TodosPage = () => {

  const dispatch = useDispatch()

  const columnsOrder = useSelector(selectTodosColumnsOrder)
  const columns = useSelector(selectTodosColumns)

  const onDragEnd = (result: DropResult) => {
    const {source, destination, type} = result
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId
      && source.index === destination.index) {
      return;
    }

    if (type === 'task') {
      const sourceColumn = columns.find(c => c.id === source.droppableId)
      const destColumn = columns.find(c => c.id === destination.droppableId)
      if (sourceColumn && destColumn) {
        const {newSourceColumn, newDestColumn} = getNewColumns(sourceColumn, destColumn, result)
        const newColumnsState = getNewColumnsState(columns, newSourceColumn, newDestColumn)
        dispatch(setColumns(newColumnsState))
      }
      return;
    }

  }

  return (
    <div className='todosPage'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="todoListsWrapper">
          {columnsOrder.map((colId) => {
            const column = columns.find(column => column.id === colId)

            if (column) {
              return <TodoList key={column.id} column={column}/>
            }
          })}
        </div>
      </DragDropContext>
    </div>
  )
}
