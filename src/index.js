import icons from '@iconify/json';
export default {
    async fetch(request) {
        // Create a URL object from the incoming request
        const url = new URL(request.url);

        // Get result
        const prefix = url.pathname.replace('.json', '');
        const names = (url.searchParams.get('name') || '').split(',');
        const result = icons(prefix, names);

        // continue with the result
        const response = new Response(result);
        response.type = 'application/json; charset=utf-8';
        return response;
    }
};