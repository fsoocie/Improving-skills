export interface IUser {
  _id?: string,
  username: string,
  email: string | undefined,
  isConfirmed?: boolean,
}

export interface IUserState {
  data: IUser | null
}
