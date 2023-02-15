const express=require("express")


const teacherRouter=express.Router()//beacause i don't want to add complite express

teacherRouter.get("/getteachers",(req,res)=>{
   
    res.send("All the teacher") 
 })
 teacherRouter.post("/addteachers",(req,res)=>{
     console.log(req.body);
    res.send("Added the teacher") 
 })
 
 module.exports={
    teacherRouter
 }