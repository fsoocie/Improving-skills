import { Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import './ActivitiesWrapper.scss'

export const ActivitiesWrapper: React.FC<{colorShadow?: string}> = ({children, colorShadow}) => {
  return (
    <div className='activitiesWrapper' style={{boxShadow: `${colorShadow} 0 1px 4px`}}>
      <Row className='activitiesWrapperHeader'>
        <Col span={2}>
          <Title level={1} style={{marginBottom: 2}}>19</Title>
        </Col>
        <Col className='activitiesWrapperHeader__subDate' span={22}>
          <Text>SATURDAY</Text>
          <Text>DECEMBER</Text>
        </Col>
      </Row>
      <div className="activitiesWrapper__content">{children}</div>
    </div>
  )
}
