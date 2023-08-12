export function load() {
	console.log('notification loaded');
	return {
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
}
