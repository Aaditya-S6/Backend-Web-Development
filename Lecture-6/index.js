const express=require('express');
const app=express();

// app.use('/cat',(req,res)=>{
//     console.log("Hello everyone");
//     res.send("<h1> cat route</h1>")
// })

app.use('/dog',(req,res)=>{
    console.log("Hello everyone");
    res.send('<h1>dog route</h1>')
})

app.get('/cat',(req,res)=>{
    console.log("cat request bheji hai");
    res.send("yelo cat response")
})

app.get('/',(req,res)=>{
    res.send('error')
})

app.get('*',(req,res)=>{
    res.send('error')
})

app.listen(8080,()=>{
    console.log("Server connected at port 8080");
})