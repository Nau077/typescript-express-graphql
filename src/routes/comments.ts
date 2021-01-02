import express from 'express';
const comments = express.Router()
import cors from 'cors'
// import commentController from '../controllers/comments'

comments.use(cors())

// comments.get('/', commentController.getComment)
// comments.delete('/deleteComment/:id', commentController.deleteComment)
// comments.post('/addComment', commentController.addComment)

module.exports = comments;
