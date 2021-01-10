import {Action} from 'redux'
import {IActivity} from './state'

export enum ActivitiesActionTypes {
  SET_ACTIVITIES = 'activities/SET_ACTIVITIES',
  FETCH_ACTIVITIES = 'activities/FETCH_ACTIVITIES',
  FETCH_CREATE_ACTIVITY = 'activities/FETCH_CREATE_ACTIVITY',
  SET_DELETE_ACTIVITIES = 'activities/SET_DELETE_ACTIVITIES'
}

export interface ISetActivities extends Action<ActivitiesActionTypes> {
  type: ActivitiesActionTypes.SET_ACTIVITIES
  payload: {activities: IActivity[], month: number}
}

export interface IFetchActivities extends Action<ActivitiesActionTypes> {
  type: ActivitiesActionTypes.FETCH_ACTIVITIES
  payload: number
}

export interface ICreateActivityData {
  skill:string,
  description: string,
  minutes: number,
  createdAt: Date
}

export interface IFetchCreateActivity extends Action<ActivitiesActionTypes> {
  type: ActivitiesActionTypes.FETCH_CREATE_ACTIVITY
  payload: ICreateActivityData
}

export interface ISetDeleteActivities extends Action<ActivitiesActionTypes> {
  type: ActivitiesActionTypes.SET_DELETE_ACTIVITIES
  payload: string
}


export type IActivitiesActionCreators =
  ISetActivities | IFetchActivities
  | IFetchCreateActivity | ISetDeleteActivities
