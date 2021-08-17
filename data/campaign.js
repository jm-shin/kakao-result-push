const mongoDB = require('mongodb');
const { getCRM } = require('../db/database');
const ObjectID = mongoDB.ObjectId;

export async function create(info) {
    getCRM().insertOne(info);
}