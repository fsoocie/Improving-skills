import {DeleteOutlined, EditOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
import React, { useState } from 'react'
import {Draggable} from 'react-beautiful-dnd'
import {useDispatch} from 'react-redux'
import {fetchDeleteTask, fetchUpdateTask} from '../../store/ducks/todos/actionCreators'
import {ITask} from '../../store/ducks/todos/types/state'
import classNames from 'classnames'

interface ITodoListItemProps {
  task: ITask,
  index: number,
  columnIndex: number
}

export const TodoListItem: React.FC<ITodoListItemProps> = ({task, index, columnIndex}) => {

  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [taskContent, setTaskContent] = useState<string>(task.content)
  const [hovered, setHovered] = useState<boolean>(false)

  const updateTaskHandler = () => {
    setIsEdit(false)
    if (taskContent) {
      dispatch(fetchUpdateTask(task._id, taskContent))
    }
  }

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided) => (
        isEdit
          ? <div className='editableItem'
                 ref={provided.innerRef}
                 {...provided.dragHandleProps}
                 {...provided.draggableProps}
            >
            <TextArea
              placeholder='Enter new task`s text'
              className='addTaskForm__textarea'
              value={taskContent}
              onChange={e => setTaskContent(e.target.value)}
              showCount
              maxLength={240}
              autoSize={{ minRows: 2, maxRows: 8 }}
              autoFocus
              onBlur={updateTaskHandler}
              onPressEnter={updateTaskHandler}
            />
            <DeleteOutlined
              onMouseDown={() => dispatch(fetchDeleteTask(task._id, columnIndex))}
              className='editableItem__icon' />
          </div>
          : <div className={classNames('todoListItem', {'todoListItem--active': hovered})}
                 ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
          >
              {task.content}
              {hovered && <EditOutlined
                onClick={() => {
                  setIsEdit(true)
                  setHovered(false)
                }}
                className='todoListItem__editIcon'/>}
            </div>
      )}
    </Draggable>

  )
}


