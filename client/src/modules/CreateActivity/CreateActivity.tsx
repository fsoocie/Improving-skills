import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button, DatePicker, Form, Input} from 'antd'
import FormItem from 'antd/lib/form/FormItem'
import React from 'react'
import {Link} from 'react-router-dom'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'

export const CreateActivity: React.FC = () => {
  return (
    <MasteryBlock className='createActivity'>
      <div className="activitiesHeader">
        <div className="controls">
          <Link to='/activities' className='controls__arrowToBack'><ArrowLeftOutlined /></Link>
          <span>Add Activity</span>
          <Button className='controls__saveBtn'>Save</Button>
        </div>
      </div>
      <div className="createActivity__content">
        <Form>
          <Form.Item>
            <Button block className='selectSkillBtn' danger>
              <Avatar size={42} icon={<UserOutlined />} />
              <span className='selectSkillBtn__text'>No Skill Selected</span>
            </Button>
          </Form.Item>

          <Form.Item
            style={{marginBottom: 32}}
            name="description"
            rules={[{
              required: true,
              message: 'Skill`s name is required!'
            }]}
          >
            <Input className='activity-input' placeholder="Give it a description"/>
          </Form.Item>

          <Form.Item
            style={{marginBottom: 32}}
            name="progress"
            rules={[{
              required: true,
              message: 'Skill`s name is required!'
            }]}
          >
            <Input className='activity-input' placeholder="Progress(minutes)"/>
          </Form.Item>

          <FormItem>
            <DatePicker placeholder='Pick date of activity...' size='large' onChange={(date, strDate) => console.log(date, strDate)}/>
          </FormItem>
        </Form>
      </div>
    </MasteryBlock>
  )
}
