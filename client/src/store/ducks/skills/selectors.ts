import {IRootState} from '../../store'
import {LoadingStatus} from '../../types'
import {ISkillsState} from './types/state'

export const selectSkillsState = (state: IRootState): ISkillsState => state.skills

export const selectSkills = (state: IRootState): ISkillsState['skills'] => selectSkillsState(state).skills

export const selectSkillsLoadingStatus = (state: IRootState): LoadingStatus => selectSkillsState(state).loadingStatus

export const selectSkillsIsLoading = (state: IRootState): boolean => selectSkillsLoadingStatus(state) === LoadingStatus.LOADING
