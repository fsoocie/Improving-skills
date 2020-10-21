import {Schema, model} from "mongoose";

const schema = new Schema({
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
})

export default model('User', schema)
