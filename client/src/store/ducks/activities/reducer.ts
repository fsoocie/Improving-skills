import produce from 'immer'
import {LoadingStatus} from '../../types'
import {IActivitiesActionCreators, ActivitiesActionTypes} from './types/actionCreators'
import {IActivitiesState} from './types/state'

const initialActivitiesState: IActivitiesState = {
  loadingStatus: LoadingStatus.NEVER,
  activities: []
}

export const activitiesReducer = produce((draft: IActivitiesState, action: IActivitiesActionCreators) => {
  switch (action.type) {
    case ActivitiesActionTypes.FETCH_ACTIVITIES:
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case ActivitiesActionTypes.SET_ACTIVITIES:
      draft.loadingStatus = LoadingStatus.LOADED
      draft.activities = action.payload
      break;
  }
}, initialActivitiesState)
