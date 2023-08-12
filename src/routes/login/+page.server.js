import bcrypt from 'bcrypt';
import users from '$lib/users.json';

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const exists = users.filter((user) => user.username === form.get('username'));
		const auth = exists.filter((user) => bcrypt.compareSync(form.get('password'), user.password));
		if (!exists.length || !auth.length) {
			return { msg: 'Invalid login!' };
		}
		cookies.set('identity', auth[0].identity, { path: '/' });
		return {
			msg: 'success'
		};
	}
};
