import { Router } from 'express'
import { changePass } from '../controllers/users/changePass.js'
import { dashboard } from '../controllers/users/dashboard.js'
import { deleteUser } from '../controllers/users/deleteUser.js'
import { editAvatar } from '../controllers/users/editAvatar.js'
import { editUsername } from '../controllers/users/editUsername.js'
import { getUserInfo } from '../controllers/users/getUserInfo.js'
import { isAuth } from '../middlewares/isAuth.js'

const router = Router()

router.put('/username', isAuth, editUsername)
router.put('/password', isAuth, changePass)
router.put('/avatar', isAuth, editAvatar)
router.delete('/delete/user', isAuth, deleteUser)
router.get('/dashboard', isAuth, dashboard)
router.get('/userInfo/:id', getUserInfo)

export default router
