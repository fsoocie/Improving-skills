import { AppstoreOutlined, ClockCircleOutlined, ContainerOutlined, DesktopOutlined,
  GoldOutlined,
  LogoutOutlined,
  MailOutlined, PieChartOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React, {useState} from 'react'
import './SideMenu.scss'

export const SideMenu: React.FC = () => {

  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <Menu
      mode="inline"
      theme="dark"
      inlineCollapsed={isCollapsed}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <Menu.Item key="2">
        fsoocie <LogoutOutlined />
      </Menu.Item>
      <Menu.Item key="3" icon={<ContainerOutlined />}>
        Todos
      </Menu.Item>
      <Menu.Item>
        Skills
      </Menu.Item>
      <Menu.Item icon={<ClockCircleOutlined />}>
        Timer
      </Menu.Item>
      <Menu.Item icon={<ThunderboltOutlined />}>
        Activities
      </Menu.Item>
      <Menu.Item icon={<GoldOutlined />}>
        Skills
      </Menu.Item>
    </Menu>
  )
}
