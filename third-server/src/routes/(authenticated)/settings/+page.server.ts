import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as database from '$lib/database'
import { ObjectId } from 'mongodb';
const client = await database.connect()
        const db = client.db('test')
        const collection = db.collection('users')

	export const actions: Actions = {
	logout: async ({ request, locals, cookies }) => {

		cookies.delete('userid')
		throw redirect(302, '/login')

	},
	deleteaccount: async ({ request, locals, cookies }) => {
		const user = await collection.findOne({ "_id": new ObjectId(locals.userid) })
	
		collection.updateMany(
			{ userindex: {$gt: user!.userindex} },
			{
				$inc: { userindex: -1}
			}
		)
		collection.deleteOne({_id: user?._id});

		cookies.delete('userid')

		throw redirect(302, '/register')
	

	},
};
