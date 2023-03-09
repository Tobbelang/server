import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import * as prisma from '$lib/database'
let usernameTaken = false;
export const load: PageServerLoad = ()  => {
    return {
        usernameTaken,
    };
}
export const actions: Actions = {
	register: async ({ request, locals }) => {
		const form = await request.formData();
		let username = form.get('username');
		let password = form.get('password');
		let validate_password = form.get('validate-password');
		
		const client = await database.connect(); // Connect to the mongoDB
		const db = client.db('test'); // select test db
		const collection = db.collection('users'); // select users collection
		const document = collection.countDocuments({});
		const userindex = (await document +1).valueOf()
		const result = await collection.findOne({ username }); //Tobias , test12345
		
		if (result == null) {
			collection.insertOne({username, password, userindex});
			throw redirect(302, '/');
		} else {
			usernameTaken = true;
		}
		// TODO: Implement register
		// Check if ustername already exist etc.
	},
};
