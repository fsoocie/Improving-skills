import {Action} from 'redux'
import {ISkill} from './state'

export enum SkillsActionTypes {
  SET_SKILLS = 'skills/SET_SKILLS',
  FETCH_SKILLS = 'skills/FETCH_SKILLS',
  FETCH_CREATE_SKILL = 'skills/FETCH_CREATE_SKILL',
  FETCH_DELETE_SKILL = 'skills/FETCH_DELETE_SKILL',
  SET_DELETE_SKILL = 'skills/SET_DELETE_SKILL',
  SET_CREATE_SKILL = 'skills/SET_CREATE_SKILL',
  ADD_MINUTES_TO_SKILL = 'skills/ADD_MINUTES_TO_SKILL'
}

export interface ISetSkills extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.SET_SKILLS
  payload: ISkill[]
}

export interface IFetchSkills extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.FETCH_SKILLS
}

export interface IFetchDeleteSkill extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.FETCH_DELETE_SKILL
  payload: string
}

export interface ISetDeleteSkill extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.SET_DELETE_SKILL
  payload: string
}

export interface IFetchCreateSkill extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.FETCH_CREATE_SKILL
  payload: Omit<ISkill, 'created_at' | '_id'>
  callback?: (_id: string) => void
}

export interface ISetCreateSkill extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.SET_CREATE_SKILL
  payload: ISkill
}

export interface IAddMinutesToSkill extends Action<SkillsActionTypes> {
  type: SkillsActionTypes.ADD_MINUTES_TO_SKILL
  payload: {minutes: number, _id: string}
}

export type ISkillsActionCreators =
  ISetSkills | IFetchSkills
  | IFetchCreateSkill | IFetchDeleteSkill
  | ISetDeleteSkill | ISetCreateSkill
  | IAddMinutesToSkill
