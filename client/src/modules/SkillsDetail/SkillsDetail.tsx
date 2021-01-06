import {ArrowLeftOutlined, DeleteOutlined, FolderOutlined} from '@ant-design/icons'
import {Avatar, Button, Col, Descriptions, Empty, Row} from 'antd'
import Popconfirm from 'antd/es/popconfirm'
import Progress from 'antd/es/progress'
import Spin from 'antd/lib/spin'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import classNames from 'classnames'
import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link, useHistory, useParams} from 'react-router-dom'
import {ActivitiesListContent} from '../../components/ActivitiesListContent/ActivitiesListContent'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {masteryAPI} from '../../services/api/masteryApi'
import {IActivity} from '../../store/ducks/activities/types/state'
import {fetchDeleteSkill} from '../../store/ducks/skills/actionCreators'
import {ISkill} from '../../store/ducks/skills/types/state'
import { getCorrectDate, getDailyAverage, getHoursToNextLevel} from '../../utils/dateFunctions'
import {getTimeData} from '../../utils/masteryConverter'

export const SkillsDetail: React.FC = () => {

  const [tab, setTab] = useState<'activities'|'misc'>('activities')
  const {_id} = useParams<{_id: string}>()
  const [skill, setSkill] = useState<ISkill | null>(null)
  const [activities, setActivities] = useState<IActivity[] | null>(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const timeData = skill ? getTimeData(skill.minutes) : null

  const onDeleteHandler = () => {
    dispatch(fetchDeleteSkill(_id))
    history.push('/skills')
  }

  useEffect(() => {
    masteryAPI.getOneSkill(_id).then(data => setSkill(data))
  }, [_id])

  useEffect(() => {
    if (skill) {
      masteryAPI.getActivitiesBySkill(skill._id).then(data => setActivities(data))
    }
  }, [skill])

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
                  <Popconfirm
                    title="Are you sure？" okText="Yes" cancelText="No"
                    okButtonProps={{danger: true, size: 'large'}}
                    cancelButtonProps={{type: 'text', size: 'large'}}
                    onConfirm={onDeleteHandler}
                  >
                    <Button danger className="skillsHeader__delete" icon={<DeleteOutlined size={28}/>}/>
                  </Popconfirm>
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
                {!activities
                  ? <Spin size="large" className='masterySpinner' />
                  : activities.length
                    ? <ActivitiesListContent activities={activities} />
                    : <Empty style={{marginTop: 40}} description='No activities'/>
                }
                </div>
              : <div className='skillsDetail__misc'>
                <div className="description">
                  <Title className='description__title' level={3}>Description</Title>
                  <Text className='description__content'>{skill.description}</Text>
                </div>

                <div className="times">
                  <Title className='times__title' level={3}>Times</Title>
                  <Descriptions className='times__content'>
                    <Descriptions.Item span={24} label="Created">{getCorrectDate(skill.createdAt)}</Descriptions.Item>
                    <Descriptions.Item span={24} label="Daily average">{getDailyAverage(skill.createdAt, skill.minutes)} Minute(s)</Descriptions.Item>
                    <Descriptions.Item span={24} label="Till next level">{getHoursToNextLevel(skill.minutes)} Hour(s)</Descriptions.Item>
                  </Descriptions>
                </div>
              </div>
          }
        </>
      }

    </MasteryBlock>
  )
}
