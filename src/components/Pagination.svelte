<script type="ts">
	export let page: number = 0;
	export let pages: number = 0;
	export let setPage: (page: number) => void;

	let links = new Array(pages - 1).fill(0).map((_, index) => index + 1);
</script>

<div class="pagination">
	Pages:
	{#each links as link}
		<span class={link === page + 1 ? 'current' : ''} on:click={() => setPage(link)}>{link}</span>
	{/each}
</div>

<style>
	.pagination {
		display: flex;
		flex-direction: row;
		font-size: 18px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	span {
		margin: 0 5px;
		color: #333;
	}

	.current {
		color: #000;
		font-size: 20px;
	}

	span:hover:not(.current) {
		cursor: pointer;
		text-decoration: underline;
	}
</style>
