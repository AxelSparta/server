import { Router } from 'express'
import { signUp } from '../controllers/auth/signUp.js'
import { signIn } from '../controllers/auth/signIn.js'
import { logout } from '../controllers/auth/logout.js'
const router = Router()

router.post('/signup', signUp)
router.post('/signin', signIn)
router.post('/logout', logout)

export default router
