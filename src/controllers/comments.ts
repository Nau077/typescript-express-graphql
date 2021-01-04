import { Comment } from "../models/index"

const getAllComments = async () => {
	try {
		const comments = await Comment.findAll({
			where:{
			text:{$like:'%%'}
			},
			limit:10
		})
		
		return comments		
	} catch (error) {
		return {
			"errors" : error
		}
	}
}

export = {
	getAllComments
}