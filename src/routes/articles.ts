import express from 'express';
import cors from 'cors';
const articles = express.Router()
const articlesController = require('../controllers/articles')


articles.get('/', articlesController.getAllPosts)
// articles.get('/post/:id', articlesController.getPost)
// articles.put('/editPost/:id', articlesController.editPost)
// articles.delete('/deletePost/:id', articlesController.deletePost)
// articles.post('/createPost', articlesController.createPost)

articles.use(cors());

export {
	articles
} 

