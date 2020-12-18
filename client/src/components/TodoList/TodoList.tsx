import React, {useState} from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {IColumn} from '../../store/ducks/todos/types/state'
import {selectTodosTasks} from '../../store/ducks/todos/selectors'
import {TodoListItem} from '../TodoListItem/TodoListItem'
import Button from 'antd/lib/button/button'
import {PlusOutlined} from '@ant-design/icons'
import {AddTaskForm} from '../AddTaskForm/AddTaskForm'
import {fetchAddTask, fetchSetColumnTitle} from '../../store/ducks/todos/actionCreators'
import {ColumnTitle} from '../ColumnTitle/ColumnTitle'
import classNames from 'classnames'

interface ITodoListProps {
  column: IColumn,
  columnIndex: number
}

export const TodoList: React.FC<ITodoListProps> = React.memo(({column, columnIndex}) => {

  const tasks = useSelector(selectTodosTasks)
  const [isActiveInput, setIsActiveInput] = useState<boolean>(false)
  const dispatch = useDispatch()

  function addTaskHandler(content: string) {
    setIsActiveInput(false)
    if (content) {
      const task = {
        _id: `task-${Date.now().toString()}`,
        content
      }
      dispatch(fetchAddTask(task, columnIndex))
    }
  }

  function setTitleHandler(title: string) {
    if (title) {
      dispatch(fetchSetColumnTitle(columnIndex, title))
    }
  }

  return (
    <Draggable draggableId={column._id} index={columnIndex}>
      {(provided, snapshot) => (
        <div className={classNames('todoList', {'todoList--draggable': snapshot.isDragging})}
             {...provided.draggableProps}
             ref={provided.innerRef}
        >
          <div className='colTitle__block'
               {...provided.dragHandleProps} >
            <ColumnTitle
              setTitleHandler={setTitleHandler}
              initialTitle={column.title}
              colIndex={columnIndex}
            />
          </div>

          <Droppable droppableId={column._id} type={'task'}>
            {(provided, snap) => (
              <div className={classNames('todoList__body', {'todoList__body--isDraggingOver': snap.isDraggingOver}, {'todoList__body--isDraggingFrom': !!snap.draggingFromThisWith && !snap.isDraggingOver})}>
              <div className={classNames('todoList__content')}
                   {...provided.droppableProps}
                   ref={provided.innerRef}
              >
                {column.taskIds.map((taskId, index) => {
                  const task = tasks.find(task => task._id === taskId)
                  if (task) {
                    return <TodoListItem key={task._id} task={task} index={index} columnIndex={columnIndex}/>
                  } return null
                })}

                {provided.placeholder}
              </div>
                {isActiveInput
                  ? <AddTaskForm
                    addTaskHandler={addTaskHandler}
                  />
                  :
                  <Button
                    type='text'
                    icon={<PlusOutlined />}
                    className={classNames('todoList__add-task-button')}
                    onClick={setIsActiveInput.bind(null, true)}
                  >
                    Add task
                  </Button>
                }
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>

  )
})


