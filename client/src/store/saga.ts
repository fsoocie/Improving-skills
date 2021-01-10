import {all} from 'redux-saga/effects'
import {activitiesSaga} from './ducks/activities/sagas'
import {skillsSaga} from './ducks/skills/sagas'
import {todosSaga} from './ducks/todos/sagas'
import {userSaga} from './ducks/user/sagas'

export function* rootSaga() {
  yield all([todosSaga(), userSaga(), skillsSaga(), activitiesSaga()])
}
