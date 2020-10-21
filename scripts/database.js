const url = "mongodb+srv://Dawgs:ahp123@testcluster001.75aip.mongodb.net/testdb001?retryWrites=true&w=majority";

const {MongoClient} = require("mongodb/index");
const client = new MongoClient(url);




    async function run() {
        try {
            await client.connect();
            console.log("Connected correctly to server");
    
            const db = client.db("JS_Project");
            const col = db.collection("ItemsForSell");
    
                                                                                                                                                                     
            let personDocument = {
                 "name": { "first": "fifth", "last": "Turing" },
                 "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
                 "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
                 "contribs": [ "Turing machine", "Turing test", "Turingery" ],
                 "views": 1250000
             }
    
             // Insert a single document, wait for promise so we can read it back
             const p = await col.insertOne(personDocument);
        
            //  // Find one document
              const myDoc = await col.findOne();
            //  // Print to the console
            console.log(myDoc);
             
    
        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
            console.log("closed client");
        }
    }
    
    run().catch(console.dir);



