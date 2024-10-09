import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express();
//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:3000",
    Credential:true
}))
const PORT=9090;

app.use("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"I am coming from backend"
    })
})
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})