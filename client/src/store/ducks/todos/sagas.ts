import {put, call, takeEvery} from 'redux-saga/effects'
import {message, style} from '../../../core/antd'
import {todosApi} from '../../../services/api/todosApi'
import {setColumns} from './actionCreators'
import {IFetchSetColumnsAC, TodosActionTypes } from './types/actionCreators';

const key = 'todos-saga'
function* setColumnsSaga(action: IFetchSetColumnsAC) {
  try {
    yield put(setColumns(action.payload));
    yield call(todosApi.updateColumns, action.payload)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

export function* todosSaga() {
  yield takeEvery(TodosActionTypes.FETCH_SET_COLUMNS, setColumnsSaga);
}
