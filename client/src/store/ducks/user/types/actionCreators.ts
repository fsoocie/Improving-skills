import {Action} from 'redux'
import {ISignInPayload, ISignUpPayload} from '../../../../services/api/authApi'
import {IUserState} from './state'

export enum UserActionTypes {
  SET_USER = 'user/SET_USER',
  USER_SIGN_OUT = 'user/USER_SIGN_OUT',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP'
}

export interface ISetUserAC extends Action<UserActionTypes> {
  type: UserActionTypes.SET_USER
  payload: IUserState['data']
}

export interface IUserSignOutAC extends Action<UserActionTypes> {
  type: UserActionTypes.USER_SIGN_OUT
}

export interface IFetchSignIn extends Action<UserActionTypes> {
  type: UserActionTypes.FETCH_SIGN_IN,
  payload: ISignInPayload
}

export interface IFetchSignUp extends Action<UserActionTypes> {
  type: UserActionTypes.FETCH_SIGN_UP,
  payload: ISignUpPayload
}

export type IUserActionCreators =
  ISetUserAC | IFetchSignIn | IFetchSignUp | IUserSignOutAC
