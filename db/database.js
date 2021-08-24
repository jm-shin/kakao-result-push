import MongoDB from 'mongodb';
import { config } from '../config.js';

let db;
export function connectMongoDB() {
    return MongoDB.MongoClient.connect(config.mongo.host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((client) => {
        db = client.db();
    });
}
export function getKakaoResult() {
    return db.collection('kakaoResult');
}

export function getCRM() {
   return db.collection('CRM');
}