import { Router } from 'express'
import { createPost } from '../controllers/posts/createPost.js'
import { deletePost } from '../controllers/posts/deletePost.js'
import { editPost } from '../controllers/posts/editPost.js'
import { getPost } from '../controllers/posts/getPost.js'
import { getPosts } from '../controllers/posts/getPosts.js'
import { getPostsCat } from '../controllers/posts/getPostsCat.js'

import { isAuth } from '../middlewares/isAuth.js'

const router = Router()

router.get('/posts', getPosts)
router.get('/posts/user/:id', getPosts)
router.get('/posts/cat', getPostsCat)
router.get('/post/:id', getPost)

router.post('/posts', isAuth, createPost)
router.put('/posts/:id', isAuth, editPost)
router.delete('/posts/:id', isAuth, deletePost)

export default router
