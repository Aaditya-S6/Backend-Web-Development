const express=require('express');
const app=express();


app.get('/search',(req,res)=>{
    console.log(req.query);
    let{first,last}=req.query;
    res.send(`<h1> Hii my name is ${first} ${last}</h1>`);
})

app.listen(8080,()=>{
    console.log("Server connected at port 8080")
})