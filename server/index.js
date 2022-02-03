import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js'
import dotenv from 'dotenv'


// app set up
const app = express()
app.use(bodyParser.json({limit : "30mb" , extended : true }))
app.use(bodyParser.urlencoded({limit : "10mb" , extended : true }))
app.use(cors())
dotenv.config()

//routes
app.use("/posts" , postRouter)
app.get('/', (req , res) =>{
    res.send("To see all the posts data, go to /posts")
})



//mongobd setup 
const CONNECTION_URL = process.env.MONGODBURI
const PORT =   process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL , {useNewUrlParser : true  , useUnifiedTopology : true})
    .then(() => app.listen(PORT , () => console.log(`server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify' ,  false);

