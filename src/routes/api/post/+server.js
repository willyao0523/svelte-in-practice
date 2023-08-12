import { json } from '@sveltejs/kit';
export function POST({ request }) {
	console.log(request);
	return json({
		status: true,
		method: request.method
	});
}

export function GET({ request }) {
	console.log(request);
	return json({
		status: true,
		method: request.method
	});
}
