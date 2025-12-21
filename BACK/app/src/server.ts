import Express  from "express"

const app = Express()
const PORT = 3003;


app.get('/',(req:Express.Request ,res:Express.Response)=>{
    res.send('Success!')
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})