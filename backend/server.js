const { response } = require('express');
const express=require('express');
const app=express();
const request=require('request');
const PORT=process.env.PORT||5000;
var url='http://www.omdbapi.com/?t=sacred games&apikey=a2aa142e';
// app.get(url,(req,res)=>{
//     request(url,(err,response,body)=>{
//         if(!err && response.statusCode==200){
//             console.log(body)
//             res.send("hii")
//         }
//     })
// })

app.listen(PORT,(req,res)=>{
    console.log(`Your server is ready at port ${PORT}`);
})