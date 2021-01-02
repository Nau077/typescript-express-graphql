import { Article } from "../models/index"
import {Request, Response} from 'express';

const getAllPosts = async (req: Request, res: Response) => {
	console.log(123)
	try {
	//   const items: Items = await ItemService.findAll();
   
	  res.status(200).send({"dkd" : "dkdk"});
	} catch (e) {
	  res.status(404).send(e.message);
	}
  };

export = {
	getAllPosts
}