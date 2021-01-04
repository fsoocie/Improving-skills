import {call, put, takeEvery} from 'redux-saga/effects'
import {message, style} from '../../../core/antd'
import {masteryAPI} from '../../../services/api/masteryApi'
import {setActivities} from './actionCreators'
import {ActivitiesActionTypes, IFetchActivities} from './types/actionCreators'

const key = 'activities-saga'

function* fetchActivitiesSaga(action: IFetchActivities) {
  try {
    const activities = yield call(masteryAPI.getActivitiesByMonth, action.payload)
    yield put(setActivities(activities))
  } catch (e) {
    message.error({content: 'There is not connection to server', key, style})
  }
}

export function* activitiesSaga() {
  yield takeEvery(ActivitiesActionTypes.FETCH_ACTIVITIES, fetchActivitiesSaga)
}
