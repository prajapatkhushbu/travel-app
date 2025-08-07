const mongo=require("mongodb");

const mongoclient=mongodb.MongoClient;
const mongo_url ="mongodb+srv://prajapatkhushbu99:<db_password>@cluster0.yv1oa67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoconnect = {callback} =>{
}

mongoclient.connect(mongo_url),then(client=>{
    console.log(client);
    callback(client);
}).catch(err=>{
    console.error("Error connecting to MongoDB:", err);
});



module.exports = { mongoconnect };