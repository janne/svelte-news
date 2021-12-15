<script type="ts">
	import type { Item } from '$lib/types';
	import ItemFooter from './ItemFooter.svelte';

	export let item: Item;
</script>

<div class="item">
	{#if item.url}
		<a href={item.url} target="_blank">
			{item.title}
		</a>
	{:else}
		{item.title}
	{/if}
	<ItemFooter {item} />
</div>

<style>
	a {
		text-decoration: none;
		color: #339;
	}

	.item {
		margin: 8px;
		padding: 4px;
		color: #333;
		border: 1px solid #ccc;
		background-color: #eee;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
