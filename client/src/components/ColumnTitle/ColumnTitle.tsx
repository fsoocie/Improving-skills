import TextArea from 'antd/es/input/TextArea'
import Dropdown from 'antd/lib/dropdown/dropdown'
import Menu from 'antd/lib/menu'
import React, {FocusEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {clearColumn, deleteColumn} from '../../store/ducks/todos/actionCreators'
import {MoreOptionsIcon} from '../MoreOptionsIcon/MoreOptionsIcon'
import './ColumnTitle.scss'

interface IColumnTitleProps {
  setTitleHandler: (title: string) => void
  initialTitle: string
  colIndex: number
}

export const ColumnTitle: React.FC<IColumnTitleProps> = ({setTitleHandler, initialTitle, colIndex}) => {
  const [isActiveTitle, setIsActiveTitle] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(initialTitle)
  const dispatch = useDispatch()

  const menu = (
    <Menu>
      <Menu.Item
        key="0"
        onClick={() => {
          dispatch(deleteColumn(colIndex))
        }}
      >
        Delete column
      </Menu.Item>
      <Menu.Item key="1"
        onClick={() => {
          dispatch(clearColumn(colIndex))
        }}
      >Clear column</Menu.Item>
    </Menu>
  );

  return (
    <>
      {isActiveTitle
        ? <TextArea
          placeholder='Enter column`s title'
          className='colTitle__textarea'
          autoSize
          autoFocus
          onFocus={(e: FocusEvent<HTMLTextAreaElement>) => e.target.setSelectionRange(0, title.length)}
          value={title}
          onPressEnter={() => {
            setIsActiveTitle(false)
            setTitleHandler(title)
          }}
          onBlur={() => {
            setIsActiveTitle(false)
            setTitleHandler(title)
          }}
          onChange={e => setTitle(e.currentTarget.value)}
        />
        : <>
          <h3 className='colTitle__text' onClick={() => setIsActiveTitle(true)}>{initialTitle}</h3>
          <Dropdown align={{offset: [0, 32]}} overlay={menu} placement='topLeft' overlayClassName='title-overlay' trigger={['click']}>
            <div onClick={e => e.preventDefault()} style={{height: 24}}>
              <MoreOptionsIcon className='colTitle__icon'/>
            </div>
          </Dropdown>
        </>
      }
    </>
  )
}

