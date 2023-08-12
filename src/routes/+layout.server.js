export function load({ cookies }) {
	console.log(cookies);
	const data = {
		notifications: {
			count: 2,
			items: [
				{
					type: 'comment',
					content: `Hi! I'm Jack`
				},
				{
					type: 'comment',
					content: `Hi Jack! Nice to meet you!`
				},
				{
					type: 'comment',
					content: `Welcome to the chapter about load()!`
				}
			]
		}
	};
	if (cookies.get('identity') === '1') {
		data.user = {
			id: 1,
			name: 'Jack'
		};
	}
	return data;
}
