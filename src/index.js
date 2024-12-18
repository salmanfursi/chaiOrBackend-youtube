 
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import express from 'express' 
 dotenv.config();

 const app=express()
const port=process.env.PORT
connectDB()
.then(()=>{
  app.listen(port || 8000, ()=>{
console.log(`server is running on port:${port}`)
  })
})
.catch(err=>{
  console.log("/MONGO db connection failed",err)
})
 
