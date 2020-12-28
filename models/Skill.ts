import {model, Schema, Document} from 'mongoose'

export interface ISkill {
  _id?: string
  name: string
  minutes: number
  img: File
  description: string
  owner: string
  created_at?: Date
}

export type IDocumentSkill = ISkill & Document

const schema = new Schema<IDocumentSkill>({
  name: {
    type: String,
    default: 'Nameless skill'
  },
  minutes: {
    type: Number,
    required: true
  },
  img: {
    type: Buffer,
    required: false
  },
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

export default model<IDocumentSkill>('Skill', schema)
