import users from '$lib/users.json';

export function load({ cookies }) {
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
	const exists = users.filter((user) => user.identity === cookies.get('identity'));
	if (exists.length) {
		const { password, ...user } = { ...exists[0] };
		data.user = user;
	}
	return data;
}
