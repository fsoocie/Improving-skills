import {
  IFetchCreateSkill,
  IFetchSkills,
  ISetSkills,
  SkillsActionTypes
} from './types/actionCreators'
import {ISkill} from './types/state'


export const setSkills = (skills: ISkill[]): ISetSkills => ({
  type: SkillsActionTypes.SET_SKILLS,
  payload: skills
})

export const fetchSkills = (): IFetchSkills => ({
  type: SkillsActionTypes.FETCH_SKILLS
})

export const createSkill = (payload: Omit<ISkill, 'created_at' | '_id'>, callback?: (_id:string) => void): IFetchCreateSkill => ({
  type: SkillsActionTypes.FETCH_CREATE_SKILL,
  payload,
  callback
})

