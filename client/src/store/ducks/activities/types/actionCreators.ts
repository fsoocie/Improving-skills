import {Action} from 'redux'
import {IActivity} from './state'

export enum ActivitiesActionTypes {
  SET_ACTIVITIES = 'activities/SET_ACTIVITIES',
  FETCH_ACTIVITIES = 'activities/FETCH_ACTIVITIES',
}

export interface ISetActivities extends Action<ActivitiesActionTypes> {
  type: ActivitiesActionTypes.SET_ACTIVITIES
  payload: IActivity[]
}

export interface IFetchActivities extends Action<ActivitiesActionTypes> {
  type: ActivitiesActionTypes.FETCH_ACTIVITIES
  payload: number
}

export type IActivitiesActionCreators = ISetActivities | IFetchActivities
