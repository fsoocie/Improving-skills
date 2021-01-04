import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {activitiesReducer} from './ducks/activities/reducer'
import {IActivitiesState} from './ducks/activities/types/state'
import {skillsReducer} from './ducks/skills/reducer'
import {ISkillsState} from './ducks/skills/types/state'
import {todosReducer} from './ducks/todos/reducer'
import {ITodosState} from './ducks/todos/types/state'
import {userReducer} from './ducks/user/reducer'
import {IUserState} from './ducks/user/types/state'
import {rootSaga} from './saga'

const rootReducer = combineReducers<IRootState>({
  todos: todosReducer,
  user: userReducer,
  skills: skillsReducer,
  activities: activitiesReducer,
})

export interface IRootState {
  todos: ITodosState,
  user: IUserState,
  skills: ISkillsState,
  activities: IActivitiesState,
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)
