

const insertIntoDatabase = (document, coll)=>{
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
                 
        
            } catch (err) {
                console.log(err.stack);
            }
            finally {
                await client.close();
                console.log("closed client");
            }
        }
        
        run().catch(console.dir);
}

module.exports = insertIntoDatabase;



