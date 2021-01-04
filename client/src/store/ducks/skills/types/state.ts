import {LoadingStatus} from '../../../types'

export interface ISkill {
  _id: string,
  name: string,
  minutes: number,
  img: string,
  description: string,
  created_at: Date
}

export interface ISkillsState {
  skills: ISkill[],
  loadingStatus: LoadingStatus
}