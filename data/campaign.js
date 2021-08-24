import mongoDB from 'mongodb';
import { getKakaoResult } from '../db/database.js';

const ObjectID = mongoDB.ObjectId;

export async function create(info) {
    return getKakaoResult().insertOne(info);
}