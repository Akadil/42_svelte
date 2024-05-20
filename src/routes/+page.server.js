export function load() {
    return {
        status: 200,
        body: 'Hello world!'
    };
}

export const actions = {
    create: async ({ cookies, request }) => {
        return true;
    }
};