<script type="ts">
	import type { Item } from '$lib/types';
	import ItemFooter from './ItemFooter.svelte';
	import Comments from './Comments.svelte';

	export let item: Item;

	let showComments = new Set();

	function toggleComments(id: string) {
		if (showComments.has(id)) showComments.delete(id);
		else showComments.add(id);
		showComments = showComments;
	}
</script>

<div class="item">
	{#if item.url}
		<a href={item.url} target="_blank">
			{item.title}
		</a>
	{:else}
		{item.title}
	{/if}
	<ItemFooter {item} onToggleComments={() => toggleComments(item.objectID)} />
	{#if showComments.has(item.objectID)}
		<Comments {item} />
	{/if}
</div>

<style>
	a {
		text-decoration: none;
		color: #339;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.item {
		display: flex;
		flex-direction: column;
		padding: 8px;
		color: #333;
		border: 1px solid #ccc;
		background-color: #eee;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		border-radius: 4px;
	}
</style>
