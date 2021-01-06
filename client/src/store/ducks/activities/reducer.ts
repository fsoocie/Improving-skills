import produce from 'immer'
import {LoadingStatus} from '../../types'
import {ActivitiesActionTypes, IActivitiesActionCreators} from './types/actionCreators'
import {IActivitiesState} from './types/state'

const initialActivitiesState: IActivitiesState = {
  loadingStatus: LoadingStatus.NEVER,
  month: -1,
  activities: []
}

export const activitiesReducer = produce((draft: IActivitiesState, action: IActivitiesActionCreators) => {
  switch (action.type) {
    case ActivitiesActionTypes.FETCH_ACTIVITIES:
      draft.loadingStatus = LoadingStatus.LOADING
      break;
    case ActivitiesActionTypes.SET_ACTIVITIES:
      draft.loadingStatus = LoadingStatus.LOADED
      draft.activities = action.payload.activities
      draft.month = action.payload.month
      break;
    case ActivitiesActionTypes.SET_DELETE_ACTIVITIES:
      draft.activities = draft.activities.filter((activity) => activity.skill._id !== action.payload)
      break;
  }
}, initialActivitiesState)
