import {LoadingStatus} from '../../../types'
import { ISkill } from '../../skills/types/state';

export interface IActivity {
  skill: ISkill,
  _id: string,
  description: string,
  minutes: number,
  createdAt: string
}

export interface IActivitiesState {
  activities: IActivity[],
  month: number,
  loadingStatus: LoadingStatus
}
