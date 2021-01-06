import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button, Col, DatePicker, Empty, Form, Input, Row} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import Spin from 'antd/lib/spin'
import moment from 'moment'
import { Moment } from 'moment'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import { ActivitiesSkillItem } from '../../components/ActivitiesSkillItem/ActivitiesSkillItem'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {message} from '../../core/antd'
import {fetchCreateActivity} from '../../store/ducks/activities/actionCreators'
import {fetchSkills} from '../../store/ducks/skills/actionCreators'
import {selectSkills, selectSkillsIsLoading, selectSkillsLoadingStatus} from '../../store/ducks/skills/selectors'
import { ISkill } from '../../store/ducks/skills/types/state'
import {LoadingStatus} from '../../store/types'

interface IFormData {
  description: string
  minutes: number
  date: any
}

export const CreateActivity: React.FC = () => {

  const [isMainPage, setIsMainPage] = useState<boolean>(true)
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null)
  const [descriptionValue, setDescriptionValue] = useState<string>('')
  const [minutesValue, setMinutesValue] = useState<number | null>(null)
  const [dateValue, setDateValue] = useState<Moment | null>(moment(new Date()))

  const history = useHistory()
  const skills = useSelector(selectSkills)
  const isLoading = useSelector(selectSkillsIsLoading)
  const loadingStatus = useSelector(selectSkillsLoadingStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!skills.length && loadingStatus === LoadingStatus.NEVER && !isMainPage) {
      dispatch(fetchSkills())
    }
  }, [dispatch, isMainPage, skills, loadingStatus])

  const onSelectSkillHandler = (skill: ISkill) => {
    setSelectedSkill(skill)
    setIsMainPage(true)
  }

  const onFinish = (formData: IFormData) => {
    if (!selectedSkill) {
      message.error({content: 'Select skill!', key: 'activity-create'})
    } else if (!formData.date) {
      message.error({content: 'Select date!', key: 'activity-create'})
    } else {
      const date = formData.date.toDate()
      dispatch(fetchCreateActivity({
        skill: selectedSkill._id,
        description: formData.description,
        minutes: Number(formData.minutes),
        createdAt: date
      }))
      history.push('/activities/')
    }
  }
  return (
    <MasteryBlock className='createActivity'>
      {isMainPage
       ? <>
          <div className="activitiesHeader">
            <div className="controls">
              <Link to='/activities' className='controls__arrowToBack'><ArrowLeftOutlined /></Link>
              <span>Add Activity</span>
              <button form='create-skill-form' type='submit' className='controls__saveBtn'>Save</button>
            </div>
          </div>
          <div className="createActivity__content">
            <Form  initialValues={{
              ["description"]: descriptionValue,
              ["minutes"]: minutesValue,
              ["date"]: dateValue
            }} id='create-skill-form' onFinish={onFinish}>
              <Form.Item>
                <Button onClick={() => setIsMainPage(false)} block className='selectSkillBtn' danger>
                  {
                    selectedSkill && selectedSkill.img
                    ? <Avatar size={42} src={selectedSkill.img} />
                    : <Avatar size={42} icon={<UserOutlined />} />
                  }
                  <span className='selectSkillBtn__text'>{selectedSkill ? selectedSkill.name : 'No Skill Selected'}</span>
                </Button>
              </Form.Item>

              <Form.Item
                style={{marginBottom: 32}}
                name="description"
                rules={[{
                  required: true,
                  message: 'Description is required!'
                }]}

              >
                <Input
                       onChange={(e) => setDescriptionValue(e.target.value)}
                       className='activity-input' placeholder="Give it a description"/>
              </Form.Item>

              <Form.Item
                style={{marginBottom: 32}}
                name="minutes"
                rules={[{
                  required: true,
                  message: 'Progress is required!'
                }]}
              >
                <Input
                  onChange={(e) => setMinutesValue(Number(e.target.value))}
                  type='number' className='activity-input' placeholder="Progress(minutes)"/>
              </Form.Item>

              <FormItem name="date">
                <DatePicker onChange={(date: Moment | null) => setDateValue(date)} placeholder='Pick date of activity...' size='large'/>
              </FormItem>
            </Form>
          </div>
        </>
      : <>
          <Row>
            <Col span={24}>
              <div className='activitiesHeader' style={{textAlign: 'center'}}>
                Select Skill
              </div>
            </Col>
          </Row>
          <Row className='skillsList__inner'>
          <Col span={24}>
        {isLoading
          ? <Spin size="large" className='activitiesSpinner' />
          : skills.length
          ? [...skills]
          .sort((a, b) => b.minutes - a.minutes)
          .map(skill => (
          <ActivitiesSkillItem onSelectSkillHandler={onSelectSkillHandler} skill={skill} key={skill._id}/>
          ))
          : <Empty description='There are not skills here'/>
        }
          </Col>
          </Row>
        </>}
    </MasteryBlock>
  )
}
