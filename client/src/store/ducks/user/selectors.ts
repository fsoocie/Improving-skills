import { IRootState } from "../../store"
import { IUserState } from "./types/state"

export const selectUserState = (state: IRootState): IUserState => state.user

export const selectUserData = (state: IRootState): IUserState['data'] => state.user.data

export const selectIsAuth = (state: IRootState): boolean => !!state.user.data

