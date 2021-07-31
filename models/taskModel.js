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
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
})

taskSchema.virtual('dateFormat').get(function() {
  return this.created.toLocaleString("ru", {month: 'numeric', day: 'numeric'})
});

taskSchema.virtual('daysAgo').get(function() {
  return parseInt((new Date() - this.created)/(24*3600*1000)) + 1
});

const TaskModel = mongoose.model('tasks', taskSchema)

export default TaskModel
