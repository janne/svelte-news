<script type="ts">
	import type { Item, Comment } from '$lib/types';
	import { onMount } from 'svelte';
	import CommentItem from './CommentItem.svelte';
	import Loader from './Loader.svelte';

	export let item: Item;
	let comments: Comment[];

	onMount(async () => {
		fetch(`http://hn.algolia.com/api/v1/search?tags=comment,story_${item.objectID}`)
			.then((r) => r.json())
			.then((data) => (comments = data.hits.reverse()));
	});
</script>

{#if comments}
	{#each comments as comment}
		<CommentItem {comment} />
	{/each}
{:else}
	<Loader />
{/if}
