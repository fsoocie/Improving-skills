import {FolderOutlined, UserOutlined } from '@ant-design/icons'
import {Avatar, Col, Row} from 'antd'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import {IActivity} from '../../store/ducks/activities/types/state'

interface ActivityItemProps {
  activity: IActivity
}

export const ActivityItem: React.FC<ActivityItemProps> = ({activity}) => {
  return (
      <Row className='activityItem'>
        <Col span={3}>
          {activity.skill && activity.skill.img
            ? <Avatar size={48} src={activity.skill.img} />
            : <Avatar size={48} icon={<FolderOutlined />} />
          }
        </Col>
        <Col span={15} style={{display: 'flex', flexDirection: 'column'}}>
          <Title level={4} style={{margin: 0}}>{activity.skill?.name || 'Nameless skill'}</Title>
          <Title level={5} style={{margin: 0, color: '#707080', fontWeight: 400, lineHeight: 1.1}}>{activity.description || ''}</Title>
        </Col>
        <Col span={6} style={{color: '#929292', textAlign: 'end'}}>
          <span style={{fontSize: '2em'}}>{Math.floor(activity.minutes)}</span> <span style={{fontSize: '1.4em'}}>min.</span>
        </Col>
      </Row>
  )
}
