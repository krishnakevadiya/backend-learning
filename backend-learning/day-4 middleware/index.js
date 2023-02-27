
const express=require("express")
const fs= require("fs")
const {routerblogger} =require("./middleware/Logger.middleware")
const { teacherRouter } = require("./routes/teacher.route")
const {studentRouter}=require("./routes/student.route")
const app=express()

// middleware -->(middleware will have the  req and res object access as well )

// app.use((req,res,next)=>{
// 1
//    console.log("hello from middleware")
//    next()    //if we don't write next it will stuk and don't know were to go..
// if(req.url==="/about"){
    // next()

// }else{
//     res.send("not permited")
// }

// 2
// *let's check how much time it will take to give data😀
// const starttime=new Date().getTime()
// next()
// const endtime=new Date().getTime()
// console.log(`it took ${endtime-starttime} ms to give the response `)



// 3 all route visited in day
// const starttime=new Date().getTime()
// next()
// const endtime=new Date().getTime()
// fs.appendFileSync("./routedetailes.tex",`Route visited:${req.url}|Method:${req.method} |responsetime:${endtime-starttime}ms\n` )
// })

app.use("/student",studentRouter)
app.use("/teacher",teacherRouter)


// app.use(routerblogger)

// get requests-->
app.get("/",(req,res)=>{
    console.log("i am homepage")
   res.send("Homepage") 
})

app.get("/about",(req,res)=>{
    console.log("i am about page")
   res.send("aboutpage") 
})


app.get("/contect",(req,res)=>{
    console.log("i am contect page");
   res.send("contectpage") 
})


app.get("/data",(req,res)=>{
   let data=fs.readFileSync("./data.json","utf-8")
   res.send(data) 
})


app.get("/wapi",(req,res)=>{
   let data={
    banglore:"25C",
    delhi:"14C",
    pune:"28C"
   }

   const{city}=req.query
   res.send(`the temprecher at ${city} is ${data[city]}`)
})

app.get("/man/:number",(req,res)=>{
    const number=req.params.number
    res.send(`man cloths number  ${number}`)
})


// server start--->
app.listen(4500,()=>{
    console.log("server is running at 4500");

})