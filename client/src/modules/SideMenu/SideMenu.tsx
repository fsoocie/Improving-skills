import {
  ClockCircleOutlined,
  ContainerOutlined,
  GoldOutlined,
  LogoutOutlined,
  ThunderboltOutlined
} from '@ant-design/icons'
import {Menu} from 'antd'
import classNames from 'classnames'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {userSignOut} from '../../store/ducks/user/actionCreators'
import {selectUserData} from '../../store/ducks/user/selectors'
import { translateLocation } from '../../utils/translateLocation'
import './SideMenu.scss'


export const SideMenu: React.FC = () => {

  const [isCollapsed, setIsCollapsed] = useState(true)

  const user = useSelector(selectUserData)
  const location = useLocation()
  const dispatch = useDispatch()

  const onSignOutClick = () => {
    window.localStorage.removeItem('Authorization')
    dispatch(userSignOut())
  }

  const itemClassName = (classes: string[]) => (
    classNames(
      ...classes,
      'sideMenu__item',
      {'sideMenu__collapsed-item': isCollapsed},
      {'sideMenu__uncollapsed-item': !isCollapsed}
    )
  )

  return (
    <>
      <Menu
        mode="inline"
        theme="dark"
        inlineIndent={12}
        selectedKeys={[translateLocation(location.pathname)]}
        className={classNames(
          'sideMenu',
          {'sideMenu__uncollapsed': !isCollapsed},
          {'sideMenu__collapsed': isCollapsed})
        }
        inlineCollapsed={isCollapsed}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      >
        <Menu.Item disabled className={itemClassName(['username'])}>
          {user.username.toUpperCase()}
        </Menu.Item>

        <Menu.Item key={'/'} className={itemClassName(['todos'])} icon={<ContainerOutlined />}>
          <Link to='/'>Todos</Link>
        </Menu.Item>

        <Menu.Item key={'/timer'} className={itemClassName(['timer'])} icon={<ClockCircleOutlined />}>
          <Link to='/timer'>Timer</Link>
        </Menu.Item>

        <Menu.Item key={'/activities'} className={itemClassName(['activities'])} icon={<ThunderboltOutlined />}>
          <Link to='/activities'>Activities</Link>
        </Menu.Item>

        <Menu.Item key={'/skills'} className={itemClassName(['skills'])} icon={<GoldOutlined />}>
          <Link to='/skills'>Skills</Link>
        </Menu.Item>

        <Menu.Item onClick={onSignOutClick} danger className={itemClassName(['sign-out'])} icon={<LogoutOutlined />}>
          Sign Out
        </Menu.Item>
      </Menu>
    </>
  )
}
