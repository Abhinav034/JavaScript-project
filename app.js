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

// getting registration data
app.get('/registration' , (req , res)=>{
    let registerationObj = JSON.parse(req.query.info)
    
    console.log(registerationObj.username)
    var arr = database.read("userAccounts");
    console.log("---------");
    console.log(arr);

    database.insert(registerationObj, "userAccounts");
    res.send('working')
})

//getting login data
app.get('/login' , (req , res)=>{
    let loginObj = JSON.parse(req.query.info)
    console.log(loginObj)
    // database.read("userAccounts");
    res.send('working')
})


app.listen(3000 , () => {
    console.log(`server started at port: 3000`)
})