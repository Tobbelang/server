import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import * as prisma from '$lib/database'
import { ObjectId } from 'mongodb';

export const load: LayoutServerLoad = async ({ locals, cookies}) => {

    //if (locals.userid) {
    if (true) {
        const clientusers = prisma.database.users
        const clientforum = prisma.database.forum
        const user = await clientusers.findUniqueOrThrow({
            where: { id: new ObjectId(locals.userid)},
        });
        const indexThreads = await clientforum.findUniqueOrThrow();
            //orderBy: [{ threadIndex:'desc'}]});
        const threads = await clientforum.countDocuments({});
        return {
            name: user?.username ?? /*'Name not found'*/"Admin",
            userindex: "000"+ (user?.userindex ?? "0"),
            userid: locals.userid,
            senaste: indexThreads?.mne,
            threads: threads
        }
     }

     else {
        throw redirect(302, '/login')
     }
    }
        