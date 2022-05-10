const express=require('express');
const mongoose=require('mongoose');

const app=express();
mongoose.connect('mongodb://localhost:27017/logindb',{useNewUrlParser:true,useUnifiedTopology:true}).then(console.log("db connected")).catch((err)=>console.log(err));
app.use(express.json());
const authRoute=require('./routes/auth');
app.listen("5000",()=>{
    console.log("backend is running properly");
})

app.use('/api',authRoute)

