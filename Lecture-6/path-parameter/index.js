const express=require('express');
const app=express();

// app.get('/r/cat',(req,res)=>{
//     console.log("cat");
//     res.send('cat')
// })

// app.get('/r/dog',(req,res)=>{
//     console.log("dog");
//     res.send('dog')
// })
// The above approach is a wrong approach

// The correct approach is , And it is called path parameter
app.get('/r/:subreddit',(req,res)=>{
    // console.log(req.params);
    let {subreddit} =req.params;
    res.send(`<h1> hi I am ${subreddit}</h1>`)
})

app.listen(8080,()=>{
    console.log("Server connected at port 8080");
})