import {Col, Row } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import {ISkill} from '../../store/ducks/skills/types/state'
import Progress from 'antd/es/progress/progress'
import './SkillItem.scss'
import {Link} from 'react-router-dom'
import {getTimeData} from '../../utils/masteryConverter'
import { FolderOutlined } from '@ant-design/icons'

interface SkillItemProps {
  skill: ISkill
}

export const SkillItem: React.FC<SkillItemProps> = ({skill}) => {

  const {status, hours, level, progress} = getTimeData(skill.minutes)

  return (
    <Link to={`/skills/${skill._id}`}>
      <div className='skillsItem'>
        <Row>
          <Col span={4}>
            {skill.img
              ? <Avatar size={70} src={skill.img} />
              : <Avatar size={70} icon={<FolderOutlined />} />
            }
          </Col>
          <Col span={16} className='skillDescription'>
            <Title level={3} className='skillDescription__name'>{skill.name}</Title>
            <Text className='skillDescription__status'>{status}</Text>
            <Text className='skillDescription__hours'>{hours} hour(s)</Text>
          </Col>
          <Col span={4} className='skillLevel' >
            <Title className='skillLevel__number' level={1} >{level}</Title>
            <Text className='skillLevel__text'>Level</Text>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Progress percent={progress} showInfo={false} />
          </Col>
        </Row>
      </div>
    </Link>
  )
}
