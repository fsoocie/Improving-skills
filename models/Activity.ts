import {model, Schema, Document} from "mongoose";

export interface IActivity {
  _id?: string
  skill: string
  description: string
  minutes: number
  month: number
  created_at?: Date
  owner: string
}
export type IDocumentActivity = IActivity & Document

const schema = new Schema<IDocumentActivity>({
  skill: {
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  },
  description: String,
  minutes: Number,
  month: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

export default model<IDocumentActivity>('Activity', schema)
