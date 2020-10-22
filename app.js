const { json } = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
const database = require('./public/scripts/database.js')

const publicPAth = path.join(__dirname , './public')

app.use(express.static(publicPAth))


//getting items for selling data
app.get('/form' , (req , res)=>{ 
    let userInfoObj = JSON.parse(req.query.info) 
    console.log(userInfoObj)
    database.insert(userInfoObj , "ItemsForSell")
})
//getting search data
app.get('/find' , (req , res)=>{
    let searchQuery = req.query.string
    console.log(searchQuery)
     database.readSearch(searchQuery , "ItemsForSell")
    
    })


    app.get('/abcd' , (req , res)=>{
      
        res.sendFile(`${publicPAth}/index.html`)
         
        
        })
    


// getting registration data
app.get('/registration' , (req , res)=>{
    let registerationObj = JSON.parse(req.query.info)
    
    // console.log(registerationObj.username)
    // async function run() {
    //     try {

    database.read("userAccounts", comparison, registerationObj)

    

})

//getting login data
app.get('/login' , (req , res)=>{
    let loginObj = JSON.parse(req.query.info)
    // console.log(loginObj.username)
    // database.read("userAccounts");
    res.send('working')
})


app.listen(3000 , () => {
    console.log(`server started at port: 3000`)
})

function comparison(arr, registerationObj){
    console.log("callback array");
    console.log(arr);

    var alreadyExist = false;

    arr.forEach(item => {
        if(item == registerationObj.username){
            alreadyExist = true;
            return
        } 

    });
    console.log(alreadyExist);
    if(!alreadyExist){
        database.insert(registerationObj, "userAccounts");
    } else{
        console.log("Use another username");
    }


}