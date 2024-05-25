import { redirect, type Handle } from "@sveltejs/kit";

const unprotectedRoutes = ['/'];

export const handle: Handle = async ({ event, resolve }) => {
    const access_token = event.cookies.get('cookie');

    if (!access_token && !unprotectedRoutes.includes(event.url.pathname)) {
        throw redirect(301, '/');
    } else if (access_token) {
        const user = {
            username: localStorage.getItem('username'),
            id: localStorage.getItem('userId')
        }
        event.locals.user = user;
    }

    const response = await resolve(event);
    return response;
};
