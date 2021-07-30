import mongoose from "mongoose"
const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

const TaskModel = mongoose.model('tasks', taskSchema)

export default TaskModel
