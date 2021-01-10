import { Action } from "redux"

export enum TimerActionTypes {
  ADD_ONE_SEC = 'timer/ADD_ONE_SEC',
  CLEAR_TIMER = 'timer/CLEAR_TIMER',
  SET_IS_PAUSED = 'timer/SET_IS_PAUSED'
}

export interface ISetIsPausedAC extends Action {
  type: TimerActionTypes.SET_IS_PAUSED,
  payload: boolean
}

export const setIsPaused = (payload: boolean): ISetIsPausedAC => ({
  type: TimerActionTypes.SET_IS_PAUSED,
  payload
})

export interface IAddOneSecAC extends Action {
  type: TimerActionTypes.ADD_ONE_SEC
}

export const addOneSec = (): IAddOneSecAC => ({
  type: TimerActionTypes.ADD_ONE_SEC
})

export interface IClearTimerAC extends Action {
  type: TimerActionTypes.CLEAR_TIMER
}

export const clearTimer = (): IClearTimerAC => ({
  type: TimerActionTypes.CLEAR_TIMER
})

export type ITimerActionCreators =
  IClearTimerAC | IAddOneSecAC | ISetIsPausedAC
