import {IFetchActivities, ISetActivities, ActivitiesActionTypes} from './types/actionCreators'
import {IActivity} from './types/state'

export const setActivities = (activities: IActivity[]): ISetActivities => ({
  type: ActivitiesActionTypes.SET_ACTIVITIES,
  payload: activities
})

export const fetchActivities = (month: number): IFetchActivities => ({
  type: ActivitiesActionTypes.FETCH_ACTIVITIES,
  payload: month
})

