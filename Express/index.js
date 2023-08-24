const express=require("express") // will return a function
const app=express() // will return an object--> Entire instance Application
//console.log(app)

// app.get("/",function(req,res){
//     res.send("Hello");
// });

app.listen(8080,()=>{
    console.log("Server Connected at port 8080")
})

app.use(()=>{
    console.log("Shaadi me Zaroor Aana");
})
