import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

const MONGO_URL = `mongodb://localhost:27017`;
const client = new MongoClient();
client.connectWithUri(MONGO_URL);

console.log('Connected to MongoDB!');

const db = client.database('deno');

export default db;
