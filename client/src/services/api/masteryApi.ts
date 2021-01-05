import {axios} from '../../core/axios'
import { IActivity } from '../../store/ducks/activities/types/state'
import {ISkill} from '../../store/ducks/skills/types/state'
import {IResponse} from './authApi'

interface uploadResponse {
  url: string
  bytes: number
  width: number
  height: number
}

export const masteryAPI = {
  async getAllSkills(): Promise<ISkill[]> {
    const {data} = await axios.get<IResponse<ISkill[]>>('/skills/')
    return data.data
  },
  async createSkill(skill: Omit<ISkill, 'created_at' | '_id'>): Promise<ISkill> {
    const {data} = await axios.post<IResponse<ISkill>>('/skills/', {...skill})
    return data.data
  },
  async getOneSkill(_id: string): Promise<ISkill> {
    const {data} = await axios.get<IResponse<ISkill>>(`/skills/${_id}`)
    return data.data
  },
  async createActivity(activity: IActivity): Promise<IActivity> {
    const {data} = await axios.post<IResponse<IActivity>>('/activities/', {...activity})
    return data.data
  },
  async getActivitiesByMonth(month: number): Promise<IActivity[]> {
    const {data} = await axios.get<IResponse<IActivity[]>>('/activities/month/' + month)
    return data.data
  },
  async getActivitiesBySkill(_id: string): Promise<IActivity[]> {
    const {data} = await axios.get<IResponse<IActivity[]>>('/activities/' + _id)
    return data.data
  },
  async upload(file: File): Promise<uploadResponse> {
    const formData = new FormData()
    formData.append('image', file)
    const {data} = await axios.post<IResponse<uploadResponse>>('/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return data.data
  }
}
