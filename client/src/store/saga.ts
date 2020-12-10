import {all} from 'redux-saga/effects'
import {todosSaga} from './ducks/todos/sagas'
import {userSaga} from './ducks/user/sagas'

export function* rootSaga() {
  yield all([todosSaga(), userSaga()])
}
