import React, {useMemo} from 'react'
import { IActivity } from '../../store/ducks/activities/types/state'
import {sortActivitiesToDayArrays} from '../../utils/dateFunctions'
import {ActivitiesWrapper} from '../ActivitiesWrapper/ActivitiesWrapper'
import {ActivityItem} from '../ActivityItem/ActivityItem'

interface ActivitiesListContent {
  activities: IActivity[],
  type?: 'skills' | 'activities'
}

export const ActivitiesListContent: React.FC<ActivitiesListContent> = ({activities, type= 'skills'}) => {

  const sortedActivities = useMemo(() => sortActivitiesToDayArrays(activities), [activities])

  return (
    <>
      {Object.keys(sortedActivities).map(key => {
        return <ActivitiesWrapper key={key} date={new Date(sortedActivities[key][0].createdAt)} colorShadow={type === 'skills'? 'rgba(2, 188, 132, .35)' : 'rgba(191, 78, 48, .2)'}>
          {sortedActivities[key].map(activity => (
            <ActivityItem key={activity._id} activity={activity}/>
          ))}
        </ActivitiesWrapper>
      })
      }
    </>
  )
}
