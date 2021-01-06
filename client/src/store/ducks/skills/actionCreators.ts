import {
  IAddMinutesToSkill,
  IFetchCreateSkill, IFetchDeleteSkill,
  IFetchSkills, ISetCreateSkill,
  ISetDeleteSkill,
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

export const fetchDeleteSkill = (_id: string): IFetchDeleteSkill => ({
  type: SkillsActionTypes.FETCH_DELETE_SKILL,
  payload: _id
})

export const setDeleteSkill = (_id: string): ISetDeleteSkill => ({
  type: SkillsActionTypes.SET_DELETE_SKILL,
  payload: _id
})

export const fetchCreateSkill = (payload: Omit<ISkill, 'created_at' | '_id'>, callback?: (_id:string) => void): IFetchCreateSkill => ({
  type: SkillsActionTypes.FETCH_CREATE_SKILL,
  payload,
  callback
})

export const setCreateSkill = (payload: ISkill): ISetCreateSkill => ({
  type: SkillsActionTypes.SET_CREATE_SKILL,
  payload,
})

export const addMinutesToSkill = (minutes: number, _id: string): IAddMinutesToSkill => ({
  type: SkillsActionTypes.ADD_MINUTES_TO_SKILL,
  payload: {minutes, _id},
})

