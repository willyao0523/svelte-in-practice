<script>
	import json from '$lib/articles.json';

	const posts = Object.values(json);
</script>

<ul>
	{#each posts as post}
		<li><a href={`/news/${post.slug}`}>{post.title}</a></li>
	{/each}
</ul>
