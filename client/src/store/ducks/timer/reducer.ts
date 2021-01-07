import produce from 'immer'
import {ITimerActionCreators, TimerActionTypes} from './actionCreators'
import {ITimerState} from './types/state'

const initialState: ITimerState = {
  seconds: 0,
  isPaused: true
}

export const timerReducer = produce((draft: ITimerState, action: ITimerActionCreators) => {
  switch (action.type) {
    case TimerActionTypes.CLEAR_TIMER:
      draft.seconds = 0
      draft.isPaused = true
      break;
    case TimerActionTypes.ADD_ONE_SEC:
      draft.seconds = draft.seconds + 1
      break;
    case TimerActionTypes.SET_IS_PAUSED:
      draft.isPaused = action.payload
      break;
  }
}, initialState)
