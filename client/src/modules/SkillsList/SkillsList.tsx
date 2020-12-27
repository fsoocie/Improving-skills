import {PlusOutlined} from '@ant-design/icons'
import {Button, Col, Row} from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {SkillItem} from '../../components/SkillItem/SkillItem'

interface SkillsListProps {

}

const skills = [
  {
    _id: '1',
    name: 'Programming',
    hours: 200,
    img: 'https://images.unsplash.com/photo-1608371322643-3c871d37607e?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'this skill should be very improving your life',
    created_at: new Date(),
  },
  {
    _id: '2',
    name: 'Reading',
    hours: 3,
    img: 'https://images.unsplash.com/photo-1608369475960-4b463f0aaefa?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'reading is impposible to everyone',
    created_at: new Date(),
  },
  {
    _id: '3',
    name: 'English',
    hours: 51,
    img: 'https://images.unsplash.com/photo-1608329857560-935ece43a7d2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'english is good',
    created_at: new Date(),
  },
  {
    _id: '4',
    name: 'English2',
    hours: 4,
    img: 'https://images.unsplash.com/photo-1608329857560-935ece43a7d2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'english is good',
    created_at: new Date(),
  },
  {
    _id: '5',
    name: 'English4',
    hours: 8,
    img: 'https://images.unsplash.com/photo-1608329857560-935ece43a7d2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'english is good',
    created_at: new Date(),
  }
]

export const SkillsList: React.FC<SkillsListProps> = () => {
  return (
    <MasteryBlock>
      <Row>
        <Col span={24}>
          <div className='skillsHeader' style={{textAlign: 'center'}}>
            Skills
          </div>
        </Col>
      </Row>
      <Row className='skillsList__inner'>
        <Col span={24} >
          {skills.map(skill => (
            <SkillItem skill={skill} key={skill._id}/>
          ))}
        </Col>
      </Row>
      <Link to='/skills/create' className='skillsList__createLink'><PlusOutlined style={{ fontSize: '18px', color: '#fff' }}/></Link>
    </MasteryBlock>
  )
}
