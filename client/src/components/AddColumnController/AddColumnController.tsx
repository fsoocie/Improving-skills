import {PlusOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, {useState} from 'react'
import './AddColumnController.scss'

interface IAddColumnControllerProps {
  addColumnHandler: (title: string) => void
}

export const AddColumnController: React.FC<IAddColumnControllerProps> = ({addColumnHandler}) => {

  const [isActiveAddColumn, setIsActiveAddColumn] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const onSubmitHandler = () => {
    console.log(title)
    setIsActiveAddColumn(false)
    setTitle('')
    addColumnHandler(title)
  }

  return (
    <div className='addColumn'>
      {
        isActiveAddColumn
          ? <>
            <TextArea
              onPressEnter={() => onSubmitHandler()}
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='addColumn__textarea'
              onBlur={() => setIsActiveAddColumn(false)}
              autoFocus
            />
            <Button
              className='addColumn__create-btn'
              type='primary'
              onMouseDown={() => onSubmitHandler()}
            >Add column</Button>
          </>
          : <Button
            icon={<PlusOutlined />}
            className='addColumn__button'
            onClick={() => setIsActiveAddColumn(true)}
          >
            Add new column
          </Button>
      }

    </div>
  )
}
