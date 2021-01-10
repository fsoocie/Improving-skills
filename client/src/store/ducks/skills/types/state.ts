import {LoadingStatus} from '../../../types'

export interface ISkill {
  _id: string,
  name: string,
  minutes: number,
  img: string,
  description: string,
  createdAt: string
}

export interface ISkillsState {
  skills: ISkill[],
  loadingStatus: LoadingStatus
}
