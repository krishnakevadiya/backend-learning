# let's start with revise day 4 middleware first
--->we learn about middleware it is just function
--->it is between request and response
why we use it---->to make our task eassy according to our need we can menuplate things...

# type of middleware
1)inbuild middleware--->express.json()
         --->express.router()
2)userdifind middleware--->time logger
                       --->route logger
3)community middleware--->cors
                      --->multer




# let's start day-5

# Quire  and Params-->both are use for dynemic response

# quire
--->somthing which is requesting to server and we will get dynamic response..
-->somthing which is serching or 
quire (for example if you serch in google somthing you can see in url those things)

=> http://localhost:4500/wapi?city=banglore

<!-- app.get("/wapi",(req,res)=>{    //you don't need to pass here spacific quire..like --> q?
   let data={
    banglore:"25C",
    delhi:"14C",
    pune:"28C"
   
   }

   const{city}=req.query
   res.send(`the temprecher at ${city} is ${data[city]}`)
}) -->

after ? is quire with the help of that you can find information what you want ..

# params

=> in case of params you need to sapcify  thing in url like..../


app.get("/man/:number",(req,res)=>{----->there is only diffrence between quiry and parums
    const number=req.params.number
    res.send(`man cloths number  ${number}`)
})


# if we have 2 quirythen.. use if else condition

# DATABASE 🤩🤩 let's start

# what is data base
-->a place to store data

# why to store data?
--> with help of data you can do analysis,for future refrence ...


# we can store data in file  right?--->data.json then way data base?
---->easy and less code...


database----1)SQL   --->structure query languge(ex->my SQL,msSQL,Postgre SQL,) 
        ----2)NoSQL  --->not structure query languge(mongoDB)


which one is more flexible?
-->it's depend on need how you need data

# we will learn MongoDB
why?->beacuse it's flaxible syntex is similer to javascript
 
 *like if you want to add {item:milk,
                           qty:1L
                           }
     if you want to add {
                         item:sope,
                         qty:2
                        }
  it is like object of javascript.....😍


  # let's learn mongo terminologi first-->
    

       momgo---3)database-->group of collection is called database
                     |
                     |
               2)collection--->group of similer document is called collection
                    |
                    |
               1)document---> any kind of data like{milk,1ltr}{laptop,2gb}
                each object is call document in case of mongo


database---->product -->this will contain product details
        ---->student-->similer this will contain student data
        ---->teacher-->teacher data...



# if i want to use data base which is already so commend is --->use rendom and
 
# for create new data base --->use nameof data base like---> use firstdatabase

# show dbs--->it will show all database

# for create collection inside-->db.collection("products")

# for isert  file inside -->db.insertOne({item:"shoes",qut:"3,color:"pink"})

# for see collection which was we created --> show collection

# for see files inside if collection -->db.products.find()

# for inserting many data--->db.students.insertMany([{name:"vv",age:"30"},{name:"kk",age:"20"},{},{},{}....]) *ehen there is many things put it in array ok.

# how to delete database-->1) go inside taht data base->use firstdatabase 2) db.droupDatabase()