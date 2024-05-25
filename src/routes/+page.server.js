import { redirect, fail } from '@sveltejs/kit';

export function load() {
    return {
        status: 200,
        body: 'Hello world!'
    };
}

/**
 * Login that requires only an username
 */
export const actions = {
    loginFast: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username');

        const base_url = import.meta.env.VITE_BACKEND_API_URL;
        const signIn_url = import.meta.env.VITE_BACKEND_GAMEUSER_SIGNIN_PATH;
        const api_url = `${base_url}${signIn_url}`;
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'username': username})
        });
        const info = await response.json();

        if (response.status === 201) {
            cookies.set('token', info.access_token, {
                path: '/',
                httpOnly: true
            });
            localStorage.setItem('username', info.username);
            localStorage.setItem('userId', info.id);

            throw redirect(301, '/lobby');
        } else {
            return fail(422, { error: await response.json() });
        }
    }
};
