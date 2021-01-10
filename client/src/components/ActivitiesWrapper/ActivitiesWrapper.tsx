import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import './ActivitiesWrapper.scss'
import { getStringMonth, getStringWeekDay } from '../../utils/dateFunctions'

interface IActivitiesWrapperProps {
  colorShadow?: string
  date: Date
}

export const ActivitiesWrapper: React.FC<IActivitiesWrapperProps> = ({children, colorShadow, date}) => {
  return (
    <div className='activitiesWrapper' style={{boxShadow: `${colorShadow} 0 1px 4px`}}>
      <div className='activitiesWrapperHeader'>
        <div>
          <Title level={1} style={{marginBottom: 2}}>{date.getDate()}</Title>
        </div>
        <div className='activitiesWrapperHeader__subDate'>
          <Text>{getStringWeekDay(date.getDay()).toUpperCase()}</Text>
          <Text>{getStringMonth(date.getMonth()).toUpperCase()}</Text>
        </div>
      </div>
      <div className="activitiesWrapper__content">{children}</div>
    </div>
  )
}
