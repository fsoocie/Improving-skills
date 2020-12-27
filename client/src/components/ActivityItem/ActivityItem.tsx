import { UserOutlined } from '@ant-design/icons'
import {Avatar, Col, Row} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import {IActivity} from '../../store/ducks/skills/types/state'

interface ActivityItemProps {
  activity: IActivity
}

export const ActivityItem: React.FC<ActivityItemProps> = ({activity}) => {
  return (
      <Row className='activityItem'>
        <Col span={3}>
          <Avatar size={48} icon={<UserOutlined />} />
        </Col>
        <Col span={16} style={{display: 'flex', flexDirection: 'column'}}>
          <Title level={4} style={{margin: 0}}>Programming</Title>
          <Title level={5} style={{margin: 0, color: '#707080', fontWeight: 400, lineHeight: 1.1}}>Descriptione wf wef wef wef we fwe f ewf wef we we fwe fwe wef wef wef wef we fwe wef wef we wf ew</Title>
        </Col>
        <Col span={4} offset={1} style={{color: '#929292'}}>
          <span style={{fontSize: '2em'}}>50</span> <span style={{fontSize: '1.4em'}}>min.</span>
        </Col>
      </Row>
  )
}
