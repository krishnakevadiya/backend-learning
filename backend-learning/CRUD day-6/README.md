# let's start with revise day-5 first

what is database -->place to store data.

why storing data is importent--->for performence some kind of analysis ,for future reference,forcasting somting....ect.



SQL     ---> structreal,not flexible


NoSQL   ---> flexible(mongoDB)

why mongoDB--->because flexible,easy to learn,it is like javascript,most of the company is using so we are learning mongoDB.


# CRUD [create  read  update delete]

1)mongo--->it will give info about mongo
2)if you want to out of mongo-->ctrl+c
3) for clear screen--->cls


for see all data--->show dbs

if i need to create somthing-->1)i will create data base
                            -->2) i will create collection
                            -->3 i will create doc
                            
if i need to create database-->use b23


if in your screen there is nothing and you want to know in which database you are--->db


now create collection --> db.createCollection("user")

now i want to insert document inside-->db.users.insertOne({name:"kabutar",city:"goa"})


now i want to find document that i added--> db.users.find()

# if i want to insert many😎

db.users.insertMany ([{name:"kano",organisation:"meta"},{name:"manu",organisation:"wipro"},{name:chunnu,organisation:"microsoft},{name:"radha",organisation:"meta"}])

--->it will give you diffreant id.🤓


now you can find all 3 details-->db.users.find()🧐

for formate data--->db.users.find().pretty🥰😍

# now if i want to find only those data were organisation is mata so..(filter out data by this single command)

command-->db.user.find({organisation:"meta}).pretty()

-->it will work for many like if you have large amount of data and you want some spasific many data like a person who is working in "meta" so it will give all info about meta 

--> you need one data so-->db.findOne({organisation:"meta"})
-->the first thing which is macthing with the filter it will give in one


# now we are clear with the two things [create, reading]✔✔


# if i want to update in all doc--->🤩🤩🤩
<!-- 
***db.users.updateMany({"filter},{"things to update"})*** -->

---->db.users.updateMany({"meta"},{$set:{location:"manipur"}})

# if i want to update in all the doc-->db.users.updateMany({},{$set:{is active:true}})


# How to delete

if i want to delete were the organisation is meta and i want delete this thing
--->db.users.deleteOne({org:"meta"})

now i want to delete all things active is true😈😈😈
---> db.useres.deleteMany({isActive:true})

# we can not use symbole so we will use this..

>= :-$gte
<= :-$lte
<  :-lt
>  :-$gt
== :-$eq
!= :-$ne
&&  :-$and  -->both condition should true in this case ✌
||  :-$or   -->any one condition should be true☝

# i want  all the doc were age in between 40 and 60

means a age>=40 and <=60

{age:{$gte:40}} and {age:{$lte:60}}


# now i want all doc were age is between 40 and 90

db.heroes.find({$and:[{age:{$gte:40}},{age:{$lte:60}}]}).pretty()

--->it will give you that data..


# now if in want that data in decresing order..


--->db.heroes.find().sort({age:-1}).pretty()

for incresing
--->db.heroes.find().sort({age:1}).pretty()


# now if we want to sort by name

-->db.heroes.find().sort({name:-1}).pretty()  ascii value you will get


# if i want to skip one doc and need other..(you can use this during pageination)

db.user.find().skip(1).pretty()

db.user.find().skip(1).limit(1).pretty()-->it will show one


# you can read all things and all combination 

-->https://www.mongodb.com/developer/products/mongodb/cheat-sheet/


go to crud in this doc 👼👼

that's all about crud.🍽🍽