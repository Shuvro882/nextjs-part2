const { MongoClient, ServerApiVersion } = require('mongodb');
const { feedback } = require('../api/route');
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const connect = (collection)=>{
    const database=process.env.DB_NAME
    return client.db(database).collection(collection);
}