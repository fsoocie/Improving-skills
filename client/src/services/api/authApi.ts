import {IUser} from '../../../../models/User'
import {axios} from '../../core/axios'

interface IResponse<T> {
  status: string
  data: T
}

export interface ISignInPayload {
  email: string
  password: string
}

export interface ISignUpPayload {
  email: string
  username: string
  password: string
  password2: string
}

export const authApi = {
  signIn: async (payload: ISignInPayload): Promise<IResponse<{token: string}>> => {
    const {data} = await axios.post<IResponse<{token: string}>>('/auth/local', payload)
    return data
  },
  signUp: async (payload: ISignUpPayload): Promise<IResponse<{token: string}>> => {
    const {data} = await axios.post('/auth/register', payload)
    return data
  },
  me: async (): Promise<IUser> => {
    const {data} = await axios.get('/auth/me')
    return data.data
  }
}
