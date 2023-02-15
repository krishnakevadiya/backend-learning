# backend-learning

1) why do we using express🤷‍♀️🧐

-->fast 

-->we can modifiy things as per our will

-->it is minimelist(less code result is more)

-->middleware(main power of express)



2)what is middleware🤓😦
-->set of instruction that perform  set of task

-->between request and response

client------------>server  [prosess---
 (reqest)                          
    |                      middleware <------(there is middleware)
    |                       
    |                       -------]
    |<-----------------(response)


-----WE CAN DO MANIPULATION BEFORE SENDING DATA TO CLIENT WITH THE HELP OF MIDDLEWERE----

# when ever you want to use middleware 👀👀
  
  
  step1-->app.use()


# middleware is set of instruction like function so...
   
   step2-->app.use(()=>{

   })

#  middleware will have the  req and res object access as well with that it can manuplate it right..

(it have 3 things 1.request 2.response 3.next)
next means-->upcomming things means next will taking me next thing like frist homepage next aboutpage...if we don't write next it will stuck and don't understend were to go so next is importent .

<!-- [means middleware will exicute BEFORE every route..] 
means my middleware will work for every Route
-->

  
   step3-->app.use((req,res,next)=>{   

   })

1.middlewere
2home
3again middleware(next)
4about



# then question is how middlewere is between reqest and response ?

let's see the flow😎😎
1. request--->2.after it will print in terninal-------->3.response[at the end get response]
                 [hello from middleware]
                   [i am homepage]
<!-- that's how middleware is in between request and response -->


+****<!-- MIDLEWARE SHOULD PRESENT TOP OF THE ROUGHTE THEN ONLY WORK FOR EVERY ROUTE-->***😎😎

+****<!-- IF YOU WANT YOUR MIDDLEWARE TO WORK FOR SPACIFIC ROUTE THEN ,PUT IT ABOVE THOSE ROUTE ONLY -->****😎😎



# the user is making a request aboutthen show about page and in all case show not permited --> -->🤷‍♂️🤷‍♂️
ans-->
app.use((req,res,next)=>{
//    console.log("hello from middleware")
//    next()    //if we don't write next it will stuk and don't know were to go..
if(req.url==="/about"){
    next()

}else{
    res.send("not permited")
}

})

# now if you want to know how much time it will taking to give response?👻👻
-->ans
with use of middleware you can do...
for that we need start time - end time so that i get how much time it's take 
# example
  time start at 1 end at 1:5 so my server take 5 min  let's do it with the help of middleware 😍😍
-->code


app.use((req,res,next)=>{
// *let's check how much time it will take to give data😀

const starttime=new Date().getTime()
next()
const endtime=new Date().getTime()
console.log(`it took ${endtime-starttime} ms to give the response `)


})

<!-- we can use fuction out side as well -->


# suppose you are working on amazon ,and your boss ask you to give detailes of all the route visited in the entire day now what you will do ?...🐇

-->at time middleware will help😎😍
how?--->code
app.use((req,res,next)=>{

// 3 all route visited in day
const starttime=new Date().getTime()
next()
const endtime=new Date().getTime()
fs.appendFileSync("./routedetailes.tex",`Route visited:${req.url}|Method:${req.method} |responsetime:${endtime-starttime}ms\n` )
})



# middleware is function right so let's create another folder and put there it will look clean and easy to debug code😎😎😊
that's why we put in other folder


# if there are multiple middleware then what will be the flow....
--->like 
app.use{(req,res,next)=>{
  console.log("1")
  next()
  console.log("2")
}}
app.use{(req,res,next)=>{
  console.log("3")
  next()
  console.log("4")
}}

😯->and i call homepage  how the flow will be?
-->it will visit frist middleware then home page and flow will be -->1 3 homepage 4 2
similer
app.use{(req,res,next)=>{
  console.log("1")
  next()
  console.log("2")
}}
app.use{(req,res,next)=>{
  console.log("3")
  next()
  console.log("4")
}}
app.use{(req,res,next)=>{
  console.log("5")
  next()
  console.log("6")
})
-->flow will be
1
3
5
homepage
6
4
2

<!-- what's happen here for first next is second and for secound next is third then print then go back  -->😁😁



# how many modules do we have?
-->inbuild,local ,externel modules
semilerly in express we have 3 type of middleware
# 1)inbuild app.use{express.json()}
# 2)local middleware that we create in logger.middleware.js fle....
# 3) external middleware (community midleware) it is similer like inbuild middleware build by other people 
when you get extrnal middleware google-->expressjs.com-->resourse--->middleware...were you can see
corse,multer...

# leat's learn corse..
--> C--->cross
    O--->Origin
    R--->Resourse
    S--->sharing

<!-- inshort is trust issue  you can say-->
so cors is inbuild things wiich is allow to open in diffrent systen as wll...read docs for more understend...

# inbuild midleware



    
