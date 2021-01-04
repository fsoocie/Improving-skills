import {ArrowLeftOutlined, DeleteOutlined, FolderOutlined} from '@ant-design/icons'
import {Avatar, Button, Col, Descriptions, Row} from 'antd'
import Progress from 'antd/es/progress'
import Spin from 'antd/lib/spin'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {ActivitiesWrapper} from '../../components/ActivitiesWrapper/ActivitiesWrapper'
import {ActivityItem} from '../../components/ActivityItem/ActivityItem'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {masteryAPI} from '../../services/api/masteryApi'
import {IActivity} from '../../store/ducks/activities/types/state'
import {ISkill} from '../../store/ducks/skills/types/state'
import {getTimeData} from '../../utils/masteryConverter'

interface SkillsDetailProps {
  activities: IActivity[]
}

const mockActivities = [
  {
    _id: '1',
    description: 'description',
    minutes: 50,
    created_at: new Date()
  },
  {
    _id: '2',
    description: 'description can be more more mover r rfeorfkorefre',
    minutes: 2,
    created_at: new Date()
  },
]

export const SkillsDetail: React.FC<SkillsDetailProps> = ({activities= mockActivities}) => {

  const [tab, setTab] = useState<'activities'|'misc'>('activities')
  const {_id} = useParams<{_id: string}>()
  const [skill, setSkill] = useState<ISkill | null>(null)

  const timeData = skill ? getTimeData(skill.minutes) : null

  useEffect(() => {
    masteryAPI.getOneSkill(_id).then(data => setSkill(data))
  }, [_id])
  return (
    <MasteryBlock>
      {!skill
        ? <Spin size="large" className='masterySpinner' />
        : <>
          <Row>
            <Col span={24}>
              <div className='skillsHeader' style={{paddingBottom: 0, paddingTop: 6}}>
                <div className="skillsHeader__controls">
                  <Link className="skillsHeader__arrowToBack" to='/skills'><ArrowLeftOutlined /></Link>
                  <Button danger className="skillsHeader__delete" icon={<DeleteOutlined size={28}/>}/>
                </div>
                <Row style={{paddingTop: 10}}>
                  {
                    skill.img
                      ? <Col span={3}><Avatar size={64} src={skill.img} /></Col>
                      : <Col span={3}><Avatar size={64} icon={<FolderOutlined />} /></Col>
                  }
                  <Col style={{marginLeft: 8}} className='skillsDetailContent' span={17}>
                    <Title className='skillsDetailContent__name' level={3}>{skill.name}</Title>
                    <Text className='skillsDetailContent__status'>{timeData && timeData.status}</Text>
                    <Text className='skillsDetailContent__hours' >{timeData? timeData.hours + ' hours' : ''}</Text>
                  </Col>
                  <Col className='skillsDetailLevel' span={3}>
                    <Title className='skillsDetailLevel__number' level={2} >{timeData && timeData.level}</Title>
                    <Text className='skillsDetailLevel__text'>Level</Text>
                  </Col>
                  <Col span={24} >
                    <Progress showInfo={false} percent={timeData? timeData.progress : 0} />
                  </Col>
                </Row>
                <Row className='tabs'>
                  <Col span={12}>
                    <Button className={classNames('tabs__item', {'tabs__item--active': tab === 'activities'})} onClick={() => setTab('activities')} ghost block>Activities</Button>
                  </Col>
                  <Col span={12}>
                    <Button className={classNames('tabs__item', {'tabs__item--active': tab === 'misc'})} onClick={() => setTab('misc')} ghost block>Misc.</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {
            tab === 'activities'
              ? <div className='skillsDetail__activities'>
                <ActivitiesWrapper colorShadow='rgba(2, 188, 132, .35)'>
                  {activities.map(activity => (
                    <ActivityItem key={activity._id} activity={activity}/>
                  ))}
                </ActivitiesWrapper>

                <ActivitiesWrapper colorShadow='rgba(2, 188, 132, .35)'>
                  {activities.map(activity => (
                    <ActivityItem key={activity._id} activity={activity}/>
                  ))}
                </ActivitiesWrapper>
              </div>
              : <div className='skillsDetail__misc'>
                <div className="description">
                  <Title className='description__title' level={3}>Description</Title>
                  <Text className='description__content'>Description some lalala l la la la lal al la a</Text>
                </div>

                <div className="times">
                  <Title className='times__title' level={3}>Times</Title>
                  <Descriptions className='times__content'>
                    <Descriptions.Item span={24} label="Created">18.12.20</Descriptions.Item>
                    <Descriptions.Item span={24} label="Daily average">416 Minute(s)</Descriptions.Item>
                    <Descriptions.Item span={24} label="Till next level">0 Hour(s)</Descriptions.Item>
                    <Descriptions.Item span={24} label="Est.time">0 Day(s)</Descriptions.Item>
                    <Descriptions.Item span={24} label="Est.date">19.12.20</Descriptions.Item>
                  </Descriptions>
                </div>
              </div>
          }
        </>
      }

    </MasteryBlock>
  )
}
