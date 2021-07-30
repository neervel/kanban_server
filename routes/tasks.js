import Router from 'express'
import taskModel from '../models/taskModel.js'

const router = new Router()

router.post('/tasks', (req, res) => {
  const task = new taskModel({
    title: req.body.title,
    description: req.body.description,
    created: new Date(),
    status: 'todo'
  })
  task.save((err, data) => {
    if (err) {
      res.status(500)
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `Post with ID_${data.id} created!`
      })
    }

  })
})

router.get('/tasks', (req, res) => {
  taskModel.find({}, 'title description created status', (err, tasks) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({tasks: tasks})
    }
  }).sort({_id: -1})
})

router.put('/tasks/:id', (req, res) => {
  taskModel.findById(req.params.id, 'title description created status', (err, task) => {
    if (err) {
      console.log(err)
    } else {
      if (req.body.title) {
        task.title = req.body.title
      }
      if (req.body.description) {
        task.description = req.body.description
      }
      if (req.body.status) {
        task.status = req.body.status
      }
      if (req.body.created) {
        
      }
      task.save((err) => {
        if (err) {
          res.sendStatus(500)
        } else {
          res.sendStatus(200)
        }

      })
    }
  })
})

router.delete('/tasks/:id', (req, res) => {
  taskModel.remove({_id: req.params.id}, err => {
    if (err) {
      res.sendStatus(500)
    } else { 
      res.sendStatus(200)
    }
  })
})

export default router