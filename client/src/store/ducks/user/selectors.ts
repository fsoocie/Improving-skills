import { IRootState } from "../../store"
import {IUser, IUserState } from "./types/state"

export const selectUserState = (state: IRootState): IUserState => state.user

export const selectUserData = (state: IRootState): IUser => state.user.data as IUser

export const selectIsAuth = (state: IRootState): boolean => !!state.user.data

