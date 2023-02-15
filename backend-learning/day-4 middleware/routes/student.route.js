const express=require("express")
const studentRouter=express.Router()

studentRouter.get("/getstudents",(req,res)=>{
 
    res.send("All the student details") 
 })
 
 studentRouter.post("/addstudents",(req,res)=>{
     console.log(req.body);
    res.send("Added the students") 
 })

 module.exports={
    studentRouter
 }