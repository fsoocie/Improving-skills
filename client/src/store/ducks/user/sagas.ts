import {takeEvery, call, put} from 'redux-saga/effects'
import {authApi} from '../../../services/api/authApi'
import {setUser} from './actionCreators'
import {IFetchSignIn, IFetchSignUp, UserActionTypes} from './types/actionCreators'
import {message, style} from '../../../core/antd'
import {IUser} from './types/state'
const key = 'auth-request'

function* fetchSignInRequest(action: IFetchSignIn) {
  try {
    message.loading({ content: 'Loading...', key, style})

    const {data} = yield call(authApi.signIn, action.payload)
    window.localStorage.setItem('Authorization', data.token)
    const userData = yield call(authApi.me)
    yield put(setUser(userData))

    message.success({content: 'Success authorization!', key, style})
  } catch (e) {
    message.error({content: 'An error occurred during authorization', key, style})
  }
}

function* fetchSignUpRequest(action: IFetchSignUp) {
  try {
    message.loading({ content: 'Loading...', key, style})

    const {data} = yield call(authApi.signUp, action.payload)
    window.localStorage.setItem('Authorization', data.token)
    const userData: IUser = yield call(authApi.me)
    yield put(setUser(userData))

    message.success({
      content: `The verification letter has been send to ${userData.email}`,
      key, duration: 7, style
    })
  } catch (e) {
    message.error({content: 'An error occurred during registration', key, style})
  }
}

export function* userSaga() {
  yield takeEvery(UserActionTypes.FETCH_SIGN_IN, fetchSignInRequest);
  yield takeEvery(UserActionTypes.FETCH_SIGN_UP, fetchSignUpRequest);
}
