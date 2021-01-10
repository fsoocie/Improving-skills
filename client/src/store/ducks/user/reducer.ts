import produce, {setAutoFreeze} from 'immer'
import {IUserActionCreators, UserActionTypes} from './types/actionCreators'
import {IUserState} from './types/state'

setAutoFreeze(false)
const initialUserState: IUserState = {
  data: null
}

export const userReducer = produce((draft: IUserState, action: IUserActionCreators) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      draft.data = action.payload
      break;
    case UserActionTypes.USER_SIGN_OUT:
      draft.data = null
      break;
  }
}, initialUserState)
