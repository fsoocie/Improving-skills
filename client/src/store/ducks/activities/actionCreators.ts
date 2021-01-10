import {
  ActivitiesActionTypes,
  ICreateActivityData,
  IFetchActivities,
  IFetchCreateActivity,
  ISetActivities,
  ISetDeleteActivities
} from './types/actionCreators'
import {IActivity} from './types/state'

export const setActivities = (activities: IActivity[], month: number): ISetActivities => ({
  type: ActivitiesActionTypes.SET_ACTIVITIES,
  payload: {activities, month}
})

export const fetchActivities = (month: number): IFetchActivities => ({
  type: ActivitiesActionTypes.FETCH_ACTIVITIES,
  payload: month
})

export const fetchCreateActivity = (payload: ICreateActivityData): IFetchCreateActivity => ({
  type: ActivitiesActionTypes.FETCH_CREATE_ACTIVITY,
  payload
})

export const setDeleteActivities = (payload: string): ISetDeleteActivities => ({
  type: ActivitiesActionTypes.SET_DELETE_ACTIVITIES,
  payload
})
