import { error } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import * as prisma from '$lib/database'

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
  
  const client = await prisma.connect()
  const db = client.db('test')
  const collection = db.collection('forum')
  const threadsRaw = await collection.find().map( function(p) { return  p}).toArray();
  const threads = JSON.stringify(threadsRaw)
  /*
  const count = collection.countDocuments({});
	const documents = (await count +1).valueOf()
  const threads = []; 
   if(user) {
    for (let index = 1; index < documents; index++) {
      threads.push(await collection.findOne({'threadIndex': index}));
  }
}*/

  if (params.forum === 'officiela-meddelanden' || params.forum === 'feedback' || params.forum === 'gaming' || params.forum === 'programmering' || params.forum === 'annat' ) {
    
    return {
      slug: params.forum,
      Threadinfo: threads

    };
  }

  throw error(404, 'Not found');
  
}