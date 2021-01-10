import {CloseOutlined, PlusOutlined} from '@ant-design/icons'
import {Button} from 'antd'
import Input from 'antd/es/input/Input'
import React, {useState} from 'react'
import './AddColumnController.scss'

interface IAddColumnControllerProps {
  addColumnHandler: (title: string) => void
}

export const AddColumnController: React.FC<IAddColumnControllerProps> = ({addColumnHandler}) => {

  const [isActiveAddColumn, setIsActiveAddColumn] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const onSubmitHandler = () => {
    setIsActiveAddColumn(false)
    setTitle('')
    addColumnHandler(title)
  }

  return (
    <div className='addColumn'>
      {
        isActiveAddColumn
          ? <div className='addColumn__block'>
            <Input
              placeholder='Enter the new column`s title'
              onPressEnter={() => onSubmitHandler()}
              value={title}
              onChange={e => setTitle(e.target.value)}
              className='addColumn__input'
              onBlur={() => setIsActiveAddColumn(false)}
              autoFocus
            />
            <Button
              className='addColumn__create-btn'
              onMouseDown={() => onSubmitHandler()}
            >Add column</Button>
            <CloseOutlined
              className='addColumn__cancel-icon'
              onMouseDown={() => setTitle('')}
            />
          </div>
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
