import Router from 'express'
import taskController from '../controller/taskController.js'

const router = new Router()

router.post('/tasks', taskController.create)
router.get('/tasks', taskController.getAll)
router.delete('/tasks/:id', taskController.delete)
router.put('/tasks/:id', taskController.update)


// router.put('/tasks/:id', (req, res) => {
//   Task.findById(req.params.id, 'title description created status', (err, task) => {
//     if (err) {
//       console.log(err)
//     } else {
//       if (req.body.title) {
//         task.title = req.body.title
//       }
//       if (req.body.description) {
//         task.description = req.body.description
//       }
//       if (req.body.status) {
//         task.status = req.body.status
//       }
//       task.save((err) => {
//         if (err) {
//           res.sendStatus(500)
//         } else {
//           res.sendStatus(200)
//         }

//       })
//     }
//   })
// })



export default router