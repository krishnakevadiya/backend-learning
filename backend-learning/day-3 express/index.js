const express=require("express")//import
const fs=require("fs")

const app=express()//invok express


app.listen(4500,()=>{      //port number
    console.log("server is running at 4500")
})



// app.get("/",(req,res)=>{
//     res.end("Home page")
// })
// now server is created and running..
//  if you want to send somthing in h1 tag then....


app.get("/",(req,res)=>{
    res.setHeader("content-type","text/html")  //some kind of extra info abt res you can provide in setheader .. 
    // this will work in http as well ..
    
    res.send("<h1>Home page</h1>")   
    // here you can use end insted of send ...
})

// let's make other request 
// (open this in post man)
app.get("/data",(req,res)=>{
  const dataStream=fs.createReadStream("./data.json","utf-8")
  dataStream.pipe(res)
})

// now let's make post request in post man


// parse
app.use(express.json()) //---->this is midleware



app.post("/adddata",(req,res)=>{
   res.send("data has been sended")
   console.log(req.body)
//    now in post write somthing if you want taht data go to get...
// we are getting somthing here 
// remember when we are storing at time stringify and when we are getiing parse ok 

})


// now form data.json if we need spacific data like student data or teacher data only then...

app.get("/students",(req,res)=>{
    // for that we need read everything frist
    const data=fs.readFileSync("./data.json","utf-8")
    const parsed_data=JSON.parse(data)
    // console.log(parsed_data.student)
    res.send(parsed_data.student)
})
  
// similer teacher data you can get

app.get("/teachers",(req,res)=>{
    // for that we need read everything frist
    const data=fs.readFileSync("./data.json","utf-8")
    const parsed_data=JSON.parse(data)
    // console.log(parsed_data.student)
    res.send(parsed_data.teacher)
})

// now if you want to add somthing in db.json
// we are adding somthing means post request 


app.post("/addstudent",(req,res)=>{
    // the detailes of new student will be present were---->inside the body of request(in postman)
    // for adding i need to read the data frist

    const data=fs.readFileSync("./data.json","utf-8")//get data

    // console.log(data)
  
//    now were i want to add inside student arr right so need to parse it frist
   const parsed_data=JSON.parse(data)//change it

// now add inside student
parsed_data.student.push(req.body)//add it in body


console.log(parsed_data)

// adding in data.json
fs.writeFileSync("./data.json",JSON.stringify(parsed_data))//write

res.send("look in terminal bro")//get data in terminal

})


// 1.get complete data
// 2.parse to add data
// 3.add data in students arr
// 4.add in json file 



// *now if we want to delete some data*//

app.delete("/delete",(req,res)=>{
    // for delete first we need data first
    const data=fs.readFileSync("./data.json","utf-8")
    const parsed_data=JSON.parse(data)
    const new_data=parsed_data.student.filter((ele)=>{
        return ele.name!=="tina"
    })
    console.log(new_data);
    fs.writeFileSync("./data.json",JSON.stringify(new_data))//write

    res.send("aa")


})