import { PrismaClient, Prisma } from '@prisma/client'
import { invalid, redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import * as prisma from '$lib/database'
import { streams } from "./+server";
let usernameTaken = false;
/** @type {import('./$types').PageServerLoad} */
export function load() {
	return {
		a: 1
	  };
	}
/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ request, locals, params }) => {
		const form = await request.formData();
		let forum = prisma.database.forum
		let users = prisma.database.forum
		let mne = form.get('Ämne');
		let Beskrivning = form.get('Beskrivning')
		let radio = form.get('default-radio');
		let beskrivningPrev = Beskrivning.substring(0,10) + "...";
		
		if (Beskrivning.length <= 9) {
			beskrivningPrev = Beskrivning;
		}
	
		const db = client.db('test'); 
		const collection = db.collection('forum'); 
		const collectionUsers = db.collection('users'); 
		const document = collection.countDocuments({});
		const threadIndex = (await document +1).valueOf();
		const mneLink = threadIndex + '-' + mne.replaceAll(' ', '_');
		const skapadInfo = new Date()
		const skapadÅr = skapadInfo.getFullYear()
		const skapadMånad = skapadInfo.getMonth() +1
		const skapadDag = skapadInfo.getDate()
		const skapadTimma = skapadInfo.getHours()+1
		const skapadMinut = skapadInfo.getMinutes() 
		const skapadDatum = skapadÅr + "-" + skapadMånad.toString().padStart(2, '0') + "-" + skapadDag.toString().padStart(2, '0')
		const skapadTid = skapadTimma.toString().padStart(2, '0') + ":" + skapadMinut.toString().padStart(2, '0')
		let user:any; 
		let userData = await collectionUsers.findOne({ "_id": new ObjectId(locals.userid) })
		user = "Anonymous"
		console.log(locals.userid)
		if(radio > 0) {
			user = userData?.username ?? "Admin"
		} else {
			console.log("user wants to be Anonymous")
		}
		if(mne && Beskrivning && radio) { 
			const forumMessage = await prisma.forum.create({
				data: {threadIndex, mne, mneLink, Beskrivning, beskrivningPrev, user, skapadDatum, skapadTid}
			});
			for (const session in streams) {
				/* send messages to all other streams exept own for this chat */
				const connection = streams[session];
				if (connection.forum == params.forum && session != locals.session) {
				  /* enqueue messages to all streams for this chat */
				  connection.controller.enqueue(JSON.stringify(forumMessage));
				  
				}
			  }
			throw redirect(302, '/');
		}
		
	},
};
