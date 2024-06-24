import { MongoClient } from "mongodb";

export async function POST(req) {
    const data = await req.json();

    const uri = process.env.MONGODB_URI; 

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db();

    const classesCollection = db.collection("classes");

    const result = await classesCollection.insertOne(data);

    console.log(result);

    await client.close();

    return new Response(JSON.stringify({ message: "Data inserted!" }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
    });
}
