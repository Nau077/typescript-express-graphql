import { Article } from "../models/index"
import {Request, Response} from 'express';

const getAllPosts = async (req: Request, res: Response) => {
	try {
		const articles = await Article.findAll({
			limit:10
		})
   
	  res.status(200).send(articles);
	} catch (e) {
	  res.status(404).send(e.message);
	}
  };

const getAllArticles = async () => {
	try {
		const articles = await Article.findAll({
			limit:10
		})
		console.log(articles)
		return articles		
	} catch (error) {
		return {
			"errors" : error
		}
	}
}

export = {
	getAllPosts,
	getAllArticles
}