import React from 'react'
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {AddColumnController} from '../../../components/AddColumnController/AddColumnController'
import {TodoList} from '../../../components/TodoList/TodoList'
import {addColumn, setColumns} from '../../../store/ducks/todos/actionCreators'
import {selectTodosColumns} from '../../../store/ducks/todos/selectors'
import '../../../styles/Todos/TodosPage.scss'
import {getNewColumns, getNewColumnsState} from '../../../utils/DNDHelper'

export const Todos = () => {

  const dispatch = useDispatch()
  const columns = useSelector(selectTodosColumns)

  const addColumnHandler = (title: string) => {
    if (title) {
      dispatch(addColumn(title))
    }
  }

  const onDragEnd = (result: DropResult) => {
    const {source, destination, type} = result
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId
      && source.index === destination.index) {
      return;
    }

    if (type === 'col') {
      const [removed] = columns.splice(source.index, 1)
      columns.splice(destination.index, 0, removed)
      dispatch(setColumns(columns))
      return;
    }

    const sourceColumn = columns.find(col => col.id === source.droppableId)
    const destColumn = columns.find(col => col.id === destination.droppableId)
    if (sourceColumn && destColumn) {
      if (sourceColumn !== destColumn) {
        const {newSourceColumn, newDestColumn} = getNewColumns(result, sourceColumn, destColumn)
        dispatch(setColumns(getNewColumnsState(columns, newSourceColumn, newDestColumn)))
      } else {
        const {newSourceColumn} = getNewColumns(result, sourceColumn!)
        dispatch(setColumns(getNewColumnsState(columns, newSourceColumn)))
      }
    }
  }

  return (
    <div className='todosPage' style={{display: 'flex'}}>
      <DragDropContext  onDragEnd={onDragEnd}>
        <Droppable  droppableId='cols-droppable' type='col' direction='horizontal'>
          {provided => (
            <div className="todoListsWrapper homeComponent"
                 {...provided.droppableProps}
                 ref={provided.innerRef}
            >
              {columns.map((column, index) => {
                  return <TodoList key={column.id} column={column} index={index}/>
              })}
              {provided.placeholder}
              <AddColumnController
                addColumnHandler={addColumnHandler}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
