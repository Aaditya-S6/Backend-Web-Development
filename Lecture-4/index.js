//~~~~~~~~~~~~~~~~ Creating a File ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let fs=require('fs');
// let data="hello";
// fs.writeFile('abc.txt',data,{
//     encoding:'utf-8',
//     flag:'w'
// },(err)=>{
//         if(err){throw err}
//         console.log("file written successfully")
//     });
// ~~~~~~~~~~~~~~~~~~~ UPDATING FILE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// fs.appendFile("abc.txt","file system ka bhaukaal",{},(err)=>{
//     if(err){throw err}
//     console.log("File updated Successfully")
// })

//~~~~~~~~~~~~~~~~~~~~ Deleting File ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

fs.unlink('abc.txt',(err)=>{
    if(err){throw err}
    console.log("File deleted successfully")
})

