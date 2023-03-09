import { error } from '@sveltejs/kit';
import * as prisma from '$lib/database'

/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
  let forum = prisma.database.forum
  const forumID = await forum.findMany({select: {id: true}})
  const forumID = await forum.findMany({select: {id: true}})
  const client = await database.connect()
  const db = client.db('test')
  const collection = db.collection('forum')
  const threadsRaw = await collection.find().map( function(p) { return  p}).toArray();
  const threads = JSON.stringify(threadsRaw)
  const ämnelink = await collection.findOne({'ämneLink': params.thread})
  /*
  const count = collection.countDocuments({});
	const documents = (await count +1).valueOf()
  const threads = []; 
   if(user) {
    for (let index = 1; index < documents; index++) {
      threads.push(await collection.findOne({'threadIndex': index}));
  }
}*/

  if (ämnelink) {
    return {
        slug: params.thread,
        Ämne: ämnelink.Ämne,
        Beskrivning: ämnelink.Beskrivning,
        user: ämnelink.user,
        skapadDatum: ämnelink.skapadDatum,
        skapadTid: ämnelink.skapadTid

    };
  }

  throw error(404, 'Not found');
  
}