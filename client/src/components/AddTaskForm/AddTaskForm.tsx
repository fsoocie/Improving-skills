import { CloseOutlined } from '@ant-design/icons'
import {Button} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, {useState} from 'react'
import './AddTaskForm.scss'

interface IAddTaskFormProps {
  addTaskHandler: (content: string) => void
}

export const AddTaskForm: React.FC<IAddTaskFormProps> = ({addTaskHandler}) => {

  const [taskContent, setTaskContent] = useState<string>('')

  return (
    <div className='addTaskForm'>
      <TextArea
        placeholder='Enter new task`s text'
        className='addTaskForm__textarea'
        value={taskContent}
        onChange={e => setTaskContent(e.target.value)}
        showCount
        maxLength={240}
        autoSize={{ minRows: 2, maxRows: 8 }}
        autoFocus
        onBlur={() => addTaskHandler(taskContent)}
        onPressEnter={() => addTaskHandler(taskContent)}
      />

      <Button
        className='addTaskForm__button'
        onClick={() => addTaskHandler(taskContent)}
      >
        Add task
      </Button>
      <CloseOutlined
        className='addTaskForm__cancel-icon'
        onMouseDown={() => addTaskHandler('')}
      />

    </div>
  )
}
