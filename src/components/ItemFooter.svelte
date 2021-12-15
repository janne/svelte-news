<script type="ts">
	import { prettyDate } from '$lib/prettyDate';

	import type { Item } from '$lib/types';

	export let item: Item;
	export let onToggleComments: (event: Event) => void;
</script>

<div class="footer">
	{item.points} points | Author: {item.author} | {prettyDate(item.created_at)} |
	<span on:click={onToggleComments} class={item.num_comments > 0 ? 'comments' : ''}>
		{item.num_comments}
		comments
	</span>
</div>

<style>
	.footer {
		font-size: 14px;
		padding: 8px 0;
	}

	.comments {
		cursor: pointer;
	}

	.comments:hover {
		text-decoration: underline;
	}
</style>
