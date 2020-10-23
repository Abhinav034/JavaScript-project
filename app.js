const { json } = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
const database = require('./public/scripts/database.js')
const publicPAth = path.join(__dirname , './public')

var f = require('fs');

database.read("ItemsForSell", mongo2Html, null, null); 


app.use(express.static(publicPAth))


//getting items for selling data
app.get('/form' , (req , res)=>{ 
    let userInfoObj = JSON.parse(req.query.info) 
    // console.log(userInfoObj)
    res.send("done");
    database.insert(userInfoObj , "ItemsForSell",refreshIndex)
    
})
// getting search data
app.get('/find' , (req , res)=>{
    let searchQuery = req.query.string
    // console.log(searchQuery)

     database.readSearch(searchQuery ,mongo2Html, "ItemsForSell",res)

    
    })

app.get("/searchall", (req,res)=>{

    database.read("ItemsForSell", mongo2Html, null, res); 

})

// getting registration data
app.get('/registration' , (req , res)=>{
    let registerationObj = JSON.parse(req.query.info)

    console.log(1)
    //res.send("lalalalala"); - till here its fine
    database.read("userAccounts", comparison, registerationObj, res)

})

//getting login data
app.get('/login' , (req , res)=>{
    let loginObj = JSON.parse(req.query.info)
    // console.log(loginObj.username)
    // database.read("userAccounts");
    // res.sendFile(`${publicPAth}/form.html`)
    res.send("login")
    database.read("userAccounts", loginValidation, loginObj, res);
    
})


app.listen(3000 , () => {
    console.log(`server started at port: 3000`)
})

function loginValidation(data, loginObj, res){
    res.send("kkkkkk");
    var alreadyExist = false;

    data.forEach(item => {
        if(item.username == loginObj.username){
            if(item.password == loginObj.password){
                alreadyExist = true;
                return
            }
            
        } 

    });
    if(alreadyExist){
        console.log("login successful")
        

    }else{
        console.log("Incorrect credentials!");

    }
    
}

function comparison(data, registerationObj, res){
  

    if(res !== null){
        res.send("abcdefghijklmnopqrstuvwxyz");
     }else{
         console.log("else")
     }
    console.log(3)
    console.log("callback array");
    // console.log(data);

    var alreadyExist = false;

    data.forEach(item => {
        if(item.username == registerationObj.username){
            alreadyExist = true;
            return
        } 

    });
    if(!alreadyExist){
        //database.insert(registerationObj, "userAccounts");
        
        console.log(4)

    } else{
        console.log("Use another username");
        res.send("registration Not successfull!!")
        console.log("4 wrong")
        
    }


}

function refreshIndex(){
    database.read("ItemsForSell",mongo2Html,null);
}

function mongo2Html(arr, res){

    if(res !== null){
        res.send("abcdefghijklmnopqrstuvwxyz");
     }else{
         console.log("else")
     }

    f.readFile('views/abc.html', 'utf8',function(err, data) {


        if (err) {
            return console.log(err);
          }
    
         
        var wholeStuff = ""
        arr.forEach(docItem => {
            //console.log(docItem.categeory);
            var htmlItem = `
          <div class="col mb-4" style="margin-top: 50px;">
                            <div class="card">
                              <img src="${String(decodeURIComponent(docItem.imageURL))}" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 class="card-title">${docItem.categeory}</h5>
                                  <h6>${docItem.price}</h6>
                                  <h6>${docItem.description}</h6>
                              </div>
                            </div>
                          </div>  
          `
            wholeStuff += htmlItem

        });  

    
            var r1 = data.replace("ITEM",wholeStuff)
            
            
                f.writeFile('public/index.html',r1 ,'utf8', function (err) {
                    if (err) return console.log(err);
                 });

                 console.log("index html file was updated with new data from database")
                 
                 
                 
    
    });

    
     

}