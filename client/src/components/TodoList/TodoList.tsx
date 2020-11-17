import React, {useState} from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {IColumn} from '../../store/ducks/todos/types/state'
import {selectTodosTasks} from '../../store/ducks/todos/selectors'
import {TodoListItem} from '../TodoListItem/TodoListItem'
import Button from 'antd/lib/button/button'
import { PlusOutlined} from '@ant-design/icons'
import {AddTaskForm} from '../AddTaskForm/AddTaskForm'
import {addTask, setColumnTitle} from '../../store/ducks/todos/actionCreators'
import { ColumnTitle } from '../ColumnTitle/ColumnTitle'

interface ITodoListProps {
  column: IColumn,
  index: number
}

export const TodoList: React.FC<ITodoListProps> = ({column, index}) => {

  const tasks = useSelector(selectTodosTasks)
  const [isActiveInput, setIsActiveInput] = useState<boolean>(false)
  const dispatch = useDispatch()

  function addTaskHandler(content: string) {
    setIsActiveInput(false)
    if (content) {
      const task = {
        id: `task-${Date.now().toString()}`,
        content
      }
      dispatch(addTask(task, index))
    }
  }

  function setTitleHandler(title: string) {
    if (title) {
      dispatch(setColumnTitle(index, title))
    }
  }

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <div className='todoList'
             {...provided.draggableProps}
             ref={provided.innerRef}
        >
          <div className='colTitle__block'
               {...provided.dragHandleProps} >
            <ColumnTitle
              setTitleHandler={setTitleHandler}
              initialTitle={column.title}
              colIndex={index}
            />
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
          {isActiveInput
          ? <AddTaskForm
              addTaskHandler={addTaskHandler}
            />
          :
            <Button
              type='text'
              icon={<PlusOutlined />}
              className='todoList__add-task-button'
              onClick={setIsActiveInput.bind(null, true)}
            >
              Add task
            </Button>
          }
        </div>
      )}
    </Draggable>

  )
}


