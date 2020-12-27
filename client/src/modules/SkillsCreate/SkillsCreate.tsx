import {Avatar, Button, Col, Form, Input, Row} from 'antd'
import React from 'react'
import './SkillsCreate.scss'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'

interface SkillsCreateProps {

}

export const SkillsCreate: React.FC<SkillsCreateProps> = () => {
  return (
    <MasteryBlock>
      <Row>
        <Col span={24}>
          <div className='skillsHeader'>
            <div className="skillsHeader__controls">
              <Link className='skillsHeader__arrowToBack' to='/skills' ><ArrowLeftOutlined/></Link>
              <span>Create Skill</span>
              <Button className='skillsHeader__saveBtn'>SAVE</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} style={{padding: 42}}>
          <Form>
            <Form.Item
              style={{marginBottom: 32}}
              name="skillName"
              rules={[{
                required: true,
                message: 'Skill`s name is required!'
              }]}
            >
              <Input className='createSkill__input' placeholder="Name the skill"/>
            </Form.Item>
            <Form.Item
              style={{marginBottom: 32}}
              name="description"
            >
              <Input className='createSkill__input' placeholder="Input description"/>
            </Form.Item>
            <Form.Item
              style={{marginBottom: 32}}
              name="hours"
              rules={[{
                required: true,
                message: 'Initial progress is required!'
              }]}
            >
              <Input className='createSkill__input' placeholder="Input initial progress"/>
            </Form.Item>
            <Form.Item>
              <Button block className='selectIcon'>
                <Avatar size={42} icon={<UserOutlined />} />
                <span className='selectIcon__text'>Set Icon</span>
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

    </MasteryBlock>
  )
}
