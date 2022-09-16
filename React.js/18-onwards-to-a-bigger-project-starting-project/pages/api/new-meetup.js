import { MongoClient } from 'mongodb';

// /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://WooJay:JayLin@cluster0.ngiu0d5.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(JSON.parse(data));

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup Inserted!' });
  }
};

export default handler;