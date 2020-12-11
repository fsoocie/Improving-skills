import {ISignInPayload, ISignUpPayload} from '../../../services/api/authApi'
import {IFetchSignIn, IFetchSignUp, ISetUserAC, IUserSignOutAC, UserActionTypes} from './types/actionCreators'
import {IUserState} from './types/state'

export const setUser = (payload: IUserState['data']): ISetUserAC => {
  return {type: UserActionTypes.SET_USER, payload}
}

export const userSignOut = (): IUserSignOutAC => {
  return {type: UserActionTypes.USER_SIGN_OUT}
}

export const fetchSignIn = (payload: ISignInPayload): IFetchSignIn => {
  return {type: UserActionTypes.FETCH_SIGN_IN, payload}
}

export const fetchSignUp = (payload: ISignUpPayload): IFetchSignUp => {
  return {type: UserActionTypes.FETCH_SIGN_UP, payload}
}
