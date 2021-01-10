import {FolderOutlined} from '@ant-design/icons'
import {Col, Row} from 'antd'
import Progress from 'antd/es/progress/progress'
import Avatar from 'antd/lib/avatar/avatar'
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import React from 'react'
import {ISkill} from '../../store/ducks/skills/types/state'
import {getTimeData} from '../../utils/masteryConverter'

interface ActivitiesSkillItemProps {
  skill: ISkill
  onSelectSkillHandler: (skill: ISkill) => void
}

export const ActivitiesSkillItem: React.FC<ActivitiesSkillItemProps> = ({skill, onSelectSkillHandler}) => {

  const {status, hours, level, progress} = getTimeData(skill.minutes)

  return (
    <div className='skillsItem' onClick={() => onSelectSkillHandler(skill)}>
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
          <Progress strokeColor='#bf4e30' percent={progress} showInfo={false} />
        </Col>
      </Row>
    </div>
  )
}
