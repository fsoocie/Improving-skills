import {Input} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, {useState, FocusEvent} from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {useDispatch, useSelector} from 'react-redux'
import {IColumn} from '../../store/ducks/todos/types/state'
import {selectTodosTasks} from '../../store/ducks/todos/selectors'
import {TodoListItem} from '../TodoListItem/TodoListItem'
import Button from 'antd/lib/button/button'
import {CloseOutlined, PlusOutlined} from '@ant-design/icons'
import {AddTaskForm} from '../AddTaskForm/AddTaskForm'
import {addTask, setColumnTitle} from '../../store/ducks/todos/actionCreators'

interface ITodoListProps {
  column: IColumn,
  index: number
}

export const TodoList: React.FC<ITodoListProps> = ({column, index}) => {

  const tasks = useSelector(selectTodosTasks)
  const [isActiveInput, setIsActiveInput] = useState<boolean>(false)
  const [isActiveTitle, setIsActiveTitle] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(column.title)
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

  function setTitleHandler() {
    setIsActiveTitle(false)
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
          <div className='todoList__title-block'
               {...provided.dragHandleProps} >
            { isActiveTitle
              ? <TextArea
                className='todoList__title-textarea'
                autoSize
                autoFocus
                onFocus={(e: FocusEvent<HTMLTextAreaElement>) => e.target.setSelectionRange(0, title.length)}
                value={title}
                onPressEnter={() => setTitleHandler()}
                onBlur={() => setTitleHandler()}
                onChange={e => setTitle(e.currentTarget.value)}
              />
              : <h3 className='todoList__title-text' onClick={() => setIsActiveTitle(true)}>{column.title}</h3>
            }
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
              className='todoList__button'
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


