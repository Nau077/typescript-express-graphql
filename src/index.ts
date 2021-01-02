import express, { Application } from "express";
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
const schema =  require('./graphql/schema')
import bodyParser from "body-parser";
import { dbConfig } from "./models";
import { articles } from './routes/articles';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

// app.use('/articles', articles)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});

export function expressApp () {
	dbConfig
	  .authenticate().then(() => console.info("connected to db"))            
	  .catch(() => {            
		  throw "error";       
	   });     
	const app: Application = express();    
	
	if (process.env.NODE_ENV === "production") {            
	   app.use(require("helmet")());           
	   app.use(require("compression")());
	 } else {
		app.use(require("cors")());
	 }
	 
	 app.use(bodyParser.json());
	 app.use(bodyParser.urlencoded({ extended: true, limit: "5m" }));
	 app.use('/', graphqlHTTP({
		schema: schema,
		graphiql: true
	  }));
	  
	  return app;
  }