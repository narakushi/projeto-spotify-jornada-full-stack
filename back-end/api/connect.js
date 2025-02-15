import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://spotify:spotify123@cluster0.3tojw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// chamando dados do banco de dados da coleção de songs
//  const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);