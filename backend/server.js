import express from "express";
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/monprojet',{
   useNewUrlParser:true 
})

app.get('/api/products/:id',(req,res) => {
    const product = data.products.find(
        (x)=>x._id === req.params.id);
        if(product){
            res.send(product);
        }else{
            res.status(404).send({message: 'product not found'})
        }
        })

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})
app.use('/api/users', userRouter);
app.get('/',(req,res)=>{
   res.send('server is ready');
})  
const port = process.env.PORT|| 5000;
app.listen(port,()=>{
    console.log(`server at ${port}`);
})