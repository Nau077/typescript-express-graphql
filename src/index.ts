import bodyParser from "body-parser";
import express, { Application } from "express";
import { dbConfig } from "./models";
import { itemsRouter } from "./routes/routes";
// import { logger } from "./utils/logger";
// import { timeMiddleware } from "./utils/middlewares"; 
export function expressApp () {    
  dbConfig
    .authenticate().then(() => logger.info("connected to db"))            
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
    app.use(timeMiddleware);
    app.use("/", routes(db));
    
    return app;
}