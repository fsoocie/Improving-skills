import {LoadingStatus} from '../../../types'

export interface IActivity {
  _id: string,
  description: string,
  minutes: number,
  created_at: Date
}

export interface IActivitiesState {
  activities: IActivity[],
  loadingStatus: LoadingStatus
}
