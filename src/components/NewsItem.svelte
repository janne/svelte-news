<script type="ts">
	import type { Item } from '$lib/types';

	export let item: Item;
</script>

<div class="item">
	{item.title}
</div>

<style>
	.item {
		margin: 8px;
		padding: 4px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		border: 1px solid #ccc;
		background-color: #eee;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}

	.item:hover {
		background-color: #ccc;
		cursor: pointer;
	}
</style>
