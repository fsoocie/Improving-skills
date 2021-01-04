import {IRootState} from '../../store'
import {LoadingStatus} from '../../types'
import {IActivitiesState} from './types/state'

export const selectActivitiesState = (state: IRootState): IActivitiesState => state.activities

export const selectActivities = (state: IRootState): IActivitiesState['activities'] => selectActivitiesState(state).activities

export const selectActivitiesLoadingStatus = (state: IRootState): LoadingStatus => selectActivitiesState(state).loadingStatus

export const selectActivitiesIsLoading = (state: IRootState): boolean => selectActivitiesLoadingStatus(state) === LoadingStatus.LOADING
