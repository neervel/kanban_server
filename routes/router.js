import Router from 'express'
import taskController from '../controller/taskController.js'

const router = new Router()

router.post('/tasks', taskController.create)
router.get('/tasks', taskController.getAll)
router.delete('/tasks/:id', taskController.delete)
router.put('/tasks/:id', taskController.update)

export default router
