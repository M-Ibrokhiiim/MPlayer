import Express  from "express"
import router from "./routes/musicsRouter.js";


const app = Express()
const PORT = 3003;

 
app.use('/MPlayer',router)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})