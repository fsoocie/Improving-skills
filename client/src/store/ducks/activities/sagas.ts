import {call, put, takeEvery} from 'redux-saga/effects'
import {message, style} from '../../../core/antd'
import {masteryAPI} from '../../../services/api/masteryApi'
import {addMinutesToSkill} from '../skills/actionCreators'
import {fetchActivities, setActivities} from './actionCreators'
import {ActivitiesActionTypes, IFetchActivities, IFetchCreateActivity} from './types/actionCreators'

const key = 'activities-saga'

function* fetchActivitiesSaga(action: IFetchActivities) {
  try {
    const activities = yield call(masteryAPI.getActivitiesByMonth, action.payload)
    yield put(setActivities(activities, action.payload))
  } catch (e) {
    message.error({content: 'There is not connection to server', key, style})
  }
}

function* fetchCreateActivitySaga(action: IFetchCreateActivity) {
  try {
    yield call(masteryAPI.createActivity, action.payload)
    yield put(addMinutesToSkill(action.payload.minutes, action.payload.skill))
    yield put(fetchActivities(action.payload.createdAt.getMonth()))
  } catch (e) {
    message.error({content: 'There is not connection to server', key, style})
  }
}

export function* activitiesSaga() {
  yield takeEvery(ActivitiesActionTypes.FETCH_ACTIVITIES, fetchActivitiesSaga)
  yield takeEvery(ActivitiesActionTypes.FETCH_CREATE_ACTIVITY, fetchCreateActivitySaga)
}
