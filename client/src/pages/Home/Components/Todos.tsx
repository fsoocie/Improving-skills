import Spin from 'antd/lib/spin'
import React, {useEffect} from 'react'
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {AddColumnController} from '../../../components/AddColumnController/AddColumnController'
import {TodoList} from '../../../components/TodoList/TodoList'
import {fetchAddColumn, fetchSetColumns, fetchTodos} from '../../../store/ducks/todos/actionCreators'
import {selectTodosColumns, selectTodosIsLoading} from '../../../store/ducks/todos/selectors'
import '../../../styles/Todos/TodosPage.scss'
import {getNewColumns, getNewColumnsState} from '../../../utils/DNDHelper'

export const Todos = () => {

  const dispatch = useDispatch()
  const columns = useSelector(selectTodosColumns)
  const isLoading = useSelector(selectTodosIsLoading)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const addColumnHandler = (title: string) => {
    if (title) {
      dispatch(fetchAddColumn(title))
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
      const copyColumns = [...columns]
      const [removed] = copyColumns.splice(source.index, 1)
      copyColumns.splice(destination.index, 0, removed)
      dispatch(fetchSetColumns(copyColumns))
      return;
    }
    const sourceColumn = columns.find(col => col._id === source.droppableId)
    const destColumn = columns.find(col => col._id === destination.droppableId)
    if (sourceColumn && destColumn) {
      if (sourceColumn !== destColumn) {
        const {newSourceColumn, newDestColumn} = getNewColumns(result, {...sourceColumn}, {...destColumn})
        dispatch(fetchSetColumns(getNewColumnsState(columns, newSourceColumn, newDestColumn)))
      } else {
        const {newSourceColumn} = getNewColumns(result, {...sourceColumn!})
        dispatch(fetchSetColumns(getNewColumnsState(columns, newSourceColumn)))
      }
    }
  }

  return (
    <div className='todosPage' style={{display: 'flex'}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='cols-droppable' type='col' direction='horizontal'>
          {provided => (
            <div className="todoListsWrapper homeComponent"
                 {...provided.droppableProps}
                 ref={provided.innerRef}
            >
              {isLoading
                ? <Spin size="large" className='todosSpinner' />
                : <>
                    {columns.map((column, index) => {
                        return <TodoList key={column._id} column={column} columnIndex={index}/>
                      })}
                    {provided.placeholder}
                    <AddColumnController
                    addColumnHandler={addColumnHandler}
                    />
                  </>
              }
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
