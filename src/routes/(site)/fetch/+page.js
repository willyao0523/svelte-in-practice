const key = 'DEMO_KEY';

export function load() {
	const pic = fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`).then((response) => {
		console.log('got response');
		return response.json();
	});
	return { pic };
}
