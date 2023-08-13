export function load({ params }) {
	const codes = ['na', 'ca', 'me', 'us'];
	const found = codes.filter((code) => code === params.country);
	return {
		country: found[0] ?? 'na'
	};
}
