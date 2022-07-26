import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import {accountRouter} from './src/routes/account'
dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(accountRouter)

mongoose.connect('mongodb://localhost:27017/accounts', {

}, ()=>{
  console.log('Ta conectao viteh')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
