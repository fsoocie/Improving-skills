import {Action} from 'redux'
import {ISkill} from './state'

export enum SkillsActionTypes {
  SET_SKILLS = 'skills/SET_SKILLS',
  FETCH_SKILLS = 'skills/FETCH_SKILLS',
  FETCH_CREATE_SKILL = 'skills/FETCH_CREATE_SKILL'
}

export interface ISetSkills extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.SET_SKILLS
  payload: ISkill[]
}

export interface IFetchSkills extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.FETCH_SKILLS
}

export interface IFetchCreateSkill extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.FETCH_CREATE_SKILL
  payload: Omit<ISkill, 'created_at' | '_id'>
  callback?: (_id: string) => void
}


export type ISkillsActionCreators = ISetSkills | IFetchSkills | IFetchCreateSkill
