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
  }
}, initialSkillsState)
