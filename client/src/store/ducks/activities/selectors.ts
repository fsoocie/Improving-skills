import {IRootState} from '../../store'
import {LoadingStatus} from '../../types'
import {IActivitiesState} from './types/state'

export const selectActivitiesState = (state: IRootState): IActivitiesState => state.activities

export const selectActivitiesMonth = (state: IRootState): number => selectActivitiesState(state).month

export const selectActivitiesList = (state: IRootState): IActivitiesState['activities'] => selectActivitiesState(state).activities

export const selectActivitiesLoadingStatus = (state: IRootState): LoadingStatus => selectActivitiesState(state).loadingStatus

export const selectActivitiesIsLoading = (state: IRootState): boolean => selectActivitiesLoadingStatus(state) === LoadingStatus.LOADING
