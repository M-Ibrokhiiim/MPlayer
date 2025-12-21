import express from "express"
import dotenv from "dotenv"
import router from "./routes/userRoute.js"

dotenv.config()
const app = express()
const PORT = 3003;




app.use('/user',router)

app.listen(PORT,()=>{
  console.log(`Server is running  PORT:${PORT} `)
});