import produce from 'immer'
import {LoadingStatus} from '../../types'
import {ISkillsActionCreators, SkillsActionTypes} from './types/actionCreators'
import {ISkillsState} from './types/state'

const initialSkillsState: ISkillsState = {
  loadingStatus: LoadingStatus.NEVER,
  skills: []
}

export const skillsReducer = produce((draft: ISkillsState, action: ISkillsActionCreators) => {
  switch (action.type) {
    case SkillsActionTypes.FETCH_SKILLS:
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case SkillsActionTypes.SET_SKILLS:
      draft.loadingStatus = LoadingStatus.LOADED
      draft.skills = action.payload
      break;
    case SkillsActionTypes.SET_DELETE_SKILL:
      draft.skills = draft.skills.filter((skill) => skill._id !== action.payload)
      break;
    case SkillsActionTypes.SET_CREATE_SKILL:
      draft.skills.push(action.payload)
      break;
    case SkillsActionTypes.ADD_MINUTES_TO_SKILL:
      const skillIndex = draft.skills.findIndex(skill => skill._id === action.payload._id)
      const skill = draft.skills[skillIndex]
      if (skill) {
        skill.minutes += action.payload.minutes
      }
      break;
  }
}, initialSkillsState)
