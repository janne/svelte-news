<script type="ts">
	import { prettyDate } from '$lib/prettyDate';

	import type { Item } from '$lib/types';

	export let item: Item;
</script>

<div class="footer">
	{item.points} points | Author: {item.author} | {prettyDate(item.created_at)} | {item.num_comments}
	comments
</div>

<style>
	.footer {
		font-size: 14px;
	}
</style>
