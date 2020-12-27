import {Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import {ISkill} from '../../store/ducks/skills/types/state'
import Progress from 'antd/es/progress/progress'
import './SkillItem.scss'
import { Link } from 'react-router-dom'

interface SkillItemProps {
  skill: ISkill
}

export const SkillItem: React.FC<SkillItemProps> = ({skill}) => {
  return (
    <Link to={`/skills/${skill._id}`}>
      <div className='skillsItem'>
        <Row>
          <Col span={4}>
            <Avatar size={70} src={skill.img} />
          </Col>
          <Col span={17} className='skillDescription'>
            <Title level={3} className='skillDescription__name'>{skill.name}</Title>
            <Text className='skillDescription__status'>novice</Text>
            <Text className='skillDescription__hours'>{skill.hours} hour(s)</Text>
          </Col>
          <Col span={3} className='skillLevel' >
            <Title className='skillLevel__number' level={1} >19</Title>
            <Text className='skillLevel__text'>Level</Text>
          </Col>
        </Row>
        <Row>
          <Col span={23} offset={0}>
            <Progress percent={30} showInfo={false} />
          </Col>
        </Row>
      </div>
    </Link>
  )
}
