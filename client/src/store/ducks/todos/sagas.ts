import {put, takeEvery} from 'redux-saga/effects'

function* fetchTodos(action: any) {
  try {
    yield put({type: "SET_TODOS", payload: action.payload});
  } catch (e) {
    /*yield put({type: "USER_FETCH_FAILED", message: e.message});*/
  }
}

export function* todosSaga() {
  yield takeEvery('FETCH_TODOS', fetchTodos);
}
