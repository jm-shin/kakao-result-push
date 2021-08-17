const MongoDB = require('mongodb');
const { config } = require('../config');

let db;
export function connectMongoDB() {
    return MongoDB.MongoClient.connect(config.mongo.host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((client) => {
        db = client.db();
    });
}

export function getCRM() {
   return db.collection('CRM');
}