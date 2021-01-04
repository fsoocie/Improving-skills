import {PlusOutlined} from '@ant-design/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import {ActivitiesWrapper} from '../../components/ActivitiesWrapper/ActivitiesWrapper'
import {ActivityItem} from '../../components/ActivityItem/ActivityItem'
import {DatePaginator} from '../../components/DatePaginator/DatePaginator'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'

const mockActivities = [
  {
    _id: '1',
    description: 'description',
    minutes: 50,
    created_at: new Date()
  },
  {
    _id: '2',
    description: 'description can be more more mover r rfeorfkorefre',
    minutes: 2,
    created_at: new Date()
  },
]

export const ActivitiesList: React.FC = () => {
  return (
    <MasteryBlock className='activitiesList'>
      <div className="activitiesHeader" style={{textAlign: 'center'}}>
        Activities
      </div>
      <DatePaginator year={new Date().getFullYear()}/>
      <div className='activitiesList__content'>
        <ActivitiesWrapper colorShadow='rgba(191, 78, 48, .2)'>
          {mockActivities.map(activity => (
            <ActivityItem key={activity._id} activity={activity} />
          ))}
        </ActivitiesWrapper>
        <ActivitiesWrapper colorShadow='rgba(191, 78, 48, .2)'>
          {mockActivities.map(activity => (
            <ActivityItem key={activity._id} activity={activity} />
          ))}
        </ActivitiesWrapper>
      </div>
      <Link to='/activities/createActivity' className='activitiesList__link'><PlusOutlined style={{ fontSize: '18px', color: '#fff' }} /></Link>
    </MasteryBlock>
  )
}
