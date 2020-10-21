import {Router} from 'express'
import UserController from "../controllers/UserController";
const router = Router()

router.get('/users', UserController.showAll)
router.get('/users/:_id', UserController.showById)

router.post('/register', UserController.register)

export default router
