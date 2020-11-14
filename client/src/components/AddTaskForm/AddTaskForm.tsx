import {Button} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, {useState} from 'react'

interface IAddTaskFormProps {
  addTaskHandler: (content: string) => void
}

export const AddTaskForm: React.FC<IAddTaskFormProps> = ({addTaskHandler}) => {

  const [taskContent, setTaskContent] = useState<string>('')

  return (
    <div>
      <TextArea
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
        type='primary'
        onClick={() => addTaskHandler(taskContent)}
      >
        Add task
      </Button>

    </div>
  )
}
