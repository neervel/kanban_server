import TaskService from '../service/taskService.js'

class TaskController {
  async create(req, res) {
    try {
      const createdTask = await TaskService.create(req)
      res.json(createdTask)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async getAll(req, res) {
    try {
      const posts = await TaskService.getAll()
      return res.json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async delete(req, res) {
    try {
      const post = await TaskService.delete(req.params.id)
      return res.json(post)
    } catch (error) {
      return res.status(200).json(error)
    }
  }
  async update(req, res) {
    try {
      const post = await TaskService.update(req)
      return res.json(post)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}

export default new TaskController()