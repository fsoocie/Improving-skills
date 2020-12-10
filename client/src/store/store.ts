import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {todosReducer} from './ducks/todos/reducer'
import {ITodosState} from './ducks/todos/types/state'
import {userReducer} from './ducks/user/reducer'
import {IUserState} from './ducks/user/types/state'
import {rootSaga} from './saga'

const rootReducer = combineReducers<IRootState>({
  todos: todosReducer,
  user: userReducer
})

export interface IRootState {
  todos: ITodosState,
  user: IUserState
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)
