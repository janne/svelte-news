<script type="ts">
	import { prettyDate } from '$lib/prettyDate';

	import type { Comment } from '$lib/types';

	export let comment: Comment;
</script>

<div class="comment">
	<div class="header">
		{comment.author} wrote {prettyDate(comment.created_at).toLocaleLowerCase()} -
	</div>
	{@html comment.comment_text}
</div>

<style>
	.header {
		margin-bottom: 10px;
	}

	.comment {
		font-size: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px;
		margin: 8px 4px;
		background-color: #fff;
		box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	}
</style>
