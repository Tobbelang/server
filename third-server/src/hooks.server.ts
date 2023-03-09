import type { Handle } from "@sveltejs/kit";

// handle runs for every request to the server
export const handle: Handle = async ({ event, resolve }) => {

	let userid = event.cookies.get('userid');

	if (userid=='cooldown' && event.url.pathname !='/cooldown'){
		return new Response(undefined, {
			status: 303,
			headers: { location:"/cooldown" },
		})
	}

	if (userid && userid!='cooldown') {
		event.locals.userid = userid;
	}

	return resolve(event);
};

