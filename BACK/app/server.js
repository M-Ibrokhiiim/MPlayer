import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()


const PORT = 3003;


app.get('/home',(req,res)=>{
res.json({success:false,msg:"You  successfully access to server!"})
})

app.listen(PORT,()=>{
  console.log(`Server is running  PORT:${PORT} `)
})