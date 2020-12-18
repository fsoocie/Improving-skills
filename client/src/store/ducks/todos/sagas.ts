import {put, call, takeEvery} from 'redux-saga/effects'
import {message, style} from '../../../core/antd'
import {todosApi} from '../../../services/api/todosApi'
import {
  addColumn,
  addTask,
  clearColumn, deleteColumn, deleteTask,
  setColumns,
  setColumnTitle,
  setTodos, updateTask
} from './actionCreators'
import {
  IFetchAddColumnAC,
  IFetchAddTaskAC, IFetchClearColumnAC,
  IFetchDeleteColumnAC, IFetchDeleteTaskAC,
  IFetchSetColumnsAC, IFetchSetColumnTitleAC,
  IFetchUpdateTaskAC,
  TodosActionTypes
} from './types/actionCreators'
import {IColumn} from './types/state'

const key = 'todos-saga'

function* setColumnsSaga(action: IFetchSetColumnsAC) {
  try {
    yield put(setColumns(action.payload));
    yield call(todosApi.updateColumns, action.payload)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* addTaskSaga(action: IFetchAddTaskAC) {
  try {
    const {task, columnIndex} = action.payload
    yield put(addTask(task, columnIndex))
    yield call(todosApi.addTask, task, columnIndex)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* addColumnSaga(action: IFetchAddColumnAC) {
  try {
    const column: IColumn = {
      _id: `column-${Date.now().toString()}`,
      title: action.payload,
      taskIds: []
    }
    yield put(addColumn(column))
    yield call(todosApi.addColumn, column)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* fetchTodosSaga() {
  try {
    const todos = yield call(todosApi.get)
    yield put(setTodos(todos))
  } catch (e) {
    message.error({content: 'Server has not responded', key, style})
  }
}

function* fetchColumnTitleSaga(action: IFetchSetColumnTitleAC) {
  const {title, columnIndex} = action.payload
  try {
    yield put(setColumnTitle(title, columnIndex))
    yield call(todosApi.columnTitle, title, columnIndex)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* fetchClearColumnSaga(action: IFetchClearColumnAC) {
  try {
    yield put(clearColumn(action.payload))
    yield call(todosApi.clearColumn, action.payload)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* fetchDeleteColumnSaga(action: IFetchDeleteColumnAC) {
  try {
    yield put(deleteColumn(action.payload))
    yield call(todosApi.deleteColumn, action.payload)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* fetchUpdateTaskSaga(action: IFetchUpdateTaskAC) {
  const {_id, content} = action.payload
  try {
    yield put(updateTask(_id, content))
    yield call(todosApi.updateTask, _id, content)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

function* fetchDeleteTaskSaga(action: IFetchDeleteTaskAC) {
  const {_id, columnIndex} = action.payload
  try {
    yield put(deleteTask(_id, columnIndex))
    yield call(todosApi.deleteTask, _id, columnIndex)
  } catch (e) {
    message.error({content: 'Changes hasn\'t saved. There is not connection with server', key, style})
  }
}

export function* todosSaga() {
  yield takeEvery(TodosActionTypes.FETCH_SET_COLUMNS, setColumnsSaga);
  yield takeEvery(TodosActionTypes.FETCH_TODOS, fetchTodosSaga);
  yield takeEvery(TodosActionTypes.FETCH_ADD_TASK, addTaskSaga);
  yield takeEvery(TodosActionTypes.FETCH_ADD_COLUMN, addColumnSaga);
  yield takeEvery(TodosActionTypes.FETCH_COLUMN_TITLE, fetchColumnTitleSaga);
  yield takeEvery(TodosActionTypes.FETCH_CLEAR_COLUMN, fetchClearColumnSaga);
  yield takeEvery(TodosActionTypes.FETCH_DELETE_COLUMN, fetchDeleteColumnSaga);
  yield takeEvery(TodosActionTypes.FETCH_UPDATE_TASK, fetchUpdateTaskSaga);
  yield takeEvery(TodosActionTypes.FETCH_DELETE_TASK, fetchDeleteTaskSaga);
}
