import { invalid, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as prisma from '$lib/database'
import { ObjectId } from 'mongodb';
let countValue: number =0;
let authenticator: boolean;
let accessgranted = false;
let match = false;
let matchUser = false;
let user:any;
let authtested:boolean;
let username:FormDataEntryValue | null = " ";
let password:FormDataEntryValue | null = " ";
let usernameSave:FormDataEntryValue | null;
let passwordSave:FormDataEntryValue | null;
let authSave:FormDataEntryValue | number;

let noUsername = false;
let incorrectpass = false;
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
		countValue,
		authenticator,
		username,
		password,
		noUsername,
		incorrectpass
	};
};



export const actions: Actions = {
	login: async ({ request, locals, cookies }) => {
		
		const form = await request.formData();
		  username = form.get('username');
		  password = form.get('password');
		 let authguess:FormDataEntryValue | null = form.get('auth');
		 let authenticationcode:number;
		const client = await database.connect();
		const db = client.db('test');
		const collection = db.collection('users');
		const result = await collection.findOne({username, password});
		const resultuser = await collection.findOne({ username });
		//Ifall användarnamn finns i databas startas Autentisering.
		console.log(resultuser)
		if (resultuser == null && authenticator == false) { 
			matchUser = false
			console.log("matchUser removed during auth") 
		}
		if(result == null && authenticator == false) {
			match = false
			console.log("match  removed during auth")
		}
		if (resultuser != null) {
			console.log("användarnamn finns i databas & Autentisering startas")
			noUsername = false;
			incorrectpass = false;
			 usernameSave = username;
			 passwordSave = password;
			authenticator = true
			authenticationcode = Math.floor(Math.random() * 100000000)
			console.log(authenticationcode); //koden skall skickas till användarens enhet eller mejladress om det hade implementerats.
			console.log(username, password)
			authSave = authenticationcode;
			if(result) {
				user = result
				match = true
				matchUser = true
				console.log("match:", match,
							"matchUser:", matchUser)
			} else if(resultuser) {
				matchUser = true
				console.log("match:", match,
							"matchUser:", matchUser)
			}
		}	
			
		// Ifall Autentiseringskoden stämmer överens med användar input så ges access 
		 else if (authguess == authSave && authenticator == true) {
			accessgranted = true;
			console.log("Autentiseringskoden stämmer överens med användarinput")
		
		}
		if(resultuser == null) {
		//Om användarnamn och lösenord finns i databas + Autentisering lyckades
		 if (match && accessgranted) {
			console.log("success")
			countValue = 0
			authenticator = false;
			authtested = false;
			username = " ";
			password = " ";
			cookies.set('userid', user._id.toString(), {
				path: '/',
				httpOnly: true, // optional for now
				sameSite: 'strict',// optional for now
				secure: process.env.NODE_ENV === 'production',// optional for now
				maxAge: 120 //
			})
	
			throw redirect(302, '/')
		}
		
		//Ifall användarnamn ej finns i databasen
		 else if (matchUser == false) {
			console.log("Användare finns ej")
			username = " ";
			password = " ";
			noUsername = true;
			return invalid(400, { message: "Användare finns ej" })
			
		
		//5 misslyckade försök = cooldown
		} else if(countValue >= 3) {
			countValue += 1;
			username = " ";
			password = " ";
			cookies.set('userid', 'cooldown', {
				path: '/',
				httpOnly: true, // optional for now
				sameSite: 'strict',// optional for now
				secure: process.env.NODE_ENV === 'production',// optional for now
				maxAge: 30 //
				})
			}	
			
		//ifall användarnamn finns men fel lösenord
		else {
			countValue += 1;
			console.log("användarnamn finns men fel lösenord")
			username = " ";
			password = " ";
			incorrectpass = true;
			authtested = false;
		}
		authenticator = false;
		if(matchUser == null || countValue >= 3 || match == null) {
			authtested = false;
			username = " ";
			password = " ";
		}
	}	
	},
	
};
