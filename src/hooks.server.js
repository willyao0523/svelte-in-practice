import { GITHUB } from '$env/static/private';

export async function handleFetch({ request, fetch }) {
	if (request.url.startsWith('https://api.github.com')) {
		request.headers.set('Accept', 'application/vnd.github+json');
		request.headers.set('Authorization', 'Bearer ' + GITHUB);
		request.headers.set('X-GITHUB-Api-Version', '2022-11-28');
	}
	return fetch(request);
}

export async function handle({ event, resolve }) {
	event.setHeaders({ 'X-NOT-FROM-GITHUB': 'our value' });
	const response = await resolve(event);
	response.headers.set('X-ANOTHER-HEADER', 'something else');
	return response;
}
