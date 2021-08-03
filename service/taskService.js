import Task from "../models/taskModel.js"

class TaskService {
  async create(req) {
    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      created: new Date(),
      status: req.body.status
    })
    const createdTask = await Task.create(task)
    return createdTask
  }

  async getAll() {
    const posts = await Task.find()
    return posts
  }

  async delete(id) {
    if(!id){
      throw new Error("Id не указан")
    }
    const post = await Task.findByIdAndDelete(id)
    return post
  }

  async update(req) {
    console.log(req.body);
    const task = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      created: req.body.created,
      status: req.body.status
    }
    const editedTask = await Task.findByIdAndUpdate(task.id, task, {new: true})
    return editedTask
  }
}

export default new TaskService()