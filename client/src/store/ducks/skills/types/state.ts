export interface ISkill {
  _id: string,
  name: string,
  hours: number,
  img: string,
  description: string,
  created_at: Date
}

export interface IActivity {
  _id: string,
  description: string,
  minutes: number,
  created_at: Date
}
