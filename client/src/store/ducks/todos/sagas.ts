import {takeEvery} from 'redux-saga/effects'

function* fetchTodos() {
  try {
    /*const todos =
    yield put({type: "SET_TODOS", payload: todos});*/
  } catch (e) {
    /*yield put({type: "USER_FETCH_FAILED", message: e.message});*/
  }
}

export function* todosSaga() {
  yield takeEvery('FETCH_TODOS', fetchTodos);
}
