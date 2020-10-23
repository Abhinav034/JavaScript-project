const insertIntoDatabase = (document, coll, callback) => {
    const url = "mongodb+srv://Dawgs:ahp123@testcluster001.75aip.mongodb.net/testdb001?retryWrites=true&w=majority";
    const {MongoClient} = require("mongodb/index");
    const client = new MongoClient(url);

        async function run() {
            try {
                await client.connect();
                console.log("Connected correctly to server");
        
                const db = client.db("JS_Project");
                const col = db.collection(coll);

                 // Insert a single document, wait for promise so we can read it back
                 const p = await col.insertOne(document);
                 console.log("insertion done");

                //  const dataall = col.find({}).toArray(function(err, explain) {
                //     // test.equal(null, err);
                //     // test.ok(explain != null);
                //     console.log(explain)
                 
                //  });
        
                //  console.log(dataall);
            } catch (err) {
                console.log(err.stack);
            }
            finally {
                await client.close();
                console.log("closed client");
                if(coll == "ItemsForSell"){
                    callback()
                }
            }
        }
        
        run().catch(console.dir);
}

const readAll = (coll, callback, obj, res) => {
    const url = "mongodb+srv://Dawgs:ahp123@testcluster001.75aip.mongodb.net/testdb001?retryWrites=true&w=majority";
    const {MongoClient} = require("mongodb/index");
    const client = new MongoClient(url);

    var userData = [];
    var itemsData;
        async function run() {
            try {
                await client.connect();
                console.log("Connected correctly to server");
        
                const db = client.db("JS_Project");
                const col = db.collection(coll);

                if(coll == "userAccounts"){

                
                    col.find().toArray(function(err, data) {
                        console.log("Printing data");
                        console.log(data);

                        userData = data;
                        // data.forEach(item => {
                        //     usernames.push(item.username);
                        
                        // });
                        
                        // console.log("........." + usernames);
                        // return usernames;
                    
                        
                    });   
                } else if(coll == "ItemsForSell"){
                    col.find().toArray(function(err, data) {
                        console.log("Printing items data");
                        console.log(data);
                        
                        itemsData = data;
                    });   
                } 
                

            } catch (err) {
                console.log(err.stack);
            }
            finally {
                await client.close();

                console.log("closed client");
                
                if(coll == "userAccounts"){
                    callback(userData, obj, res);
                } else if(coll == "ItemsForSell"){
                    callback(itemsData, obj);
                } 
            }
        }
        run().catch(console.dir);
}
    const readDatabase = (searchQuery ,callback, collection )=>{
    const url = "mongodb+srv://Dawgs:ahp123@testcluster001.75aip.mongodb.net/testdb001?retryWrites=true&w=majority";
    const {MongoClient} = require("mongodb/index");
    const client = new MongoClient(url);
    var data = []
    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to server");
    
            const db = client.db("JS_Project");
            const col = db.collection(collection);

            const dataall = col.find({categeory: `${searchQuery}`}).toArray(function(err, explain) {
                // test.equal(null, err);
                // test.ok(explain != null);
                 
                console.log(explain)
                data = explain;
            
             });
               
        } catch (error) {
            console.log(error)
        }finally {
            await client.close();
            console.log("closed client");
            if(collection == "ItemsForSell"){
                callback(data);
            }
        }

     } 
     run().catch(console.dir);
}


module.exports = {
   insert: insertIntoDatabase,
   read: readAll,
   readSearch: readDatabase

}