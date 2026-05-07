import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI environment variable is not defined');
}

declare global {
  var __vistadocsMongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri);

const clientPromise =
  global.__vistadocsMongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== 'production') {
  global.__vistadocsMongoClientPromise = clientPromise;
}

export default clientPromise;