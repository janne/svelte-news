<script type="ts">
	import Loader from '../components/Loader.svelte';
	import Header from '../components/Header.svelte';
	import NewsItem from '../components/NewsItem.svelte';
	import Pagination from '../components/Pagination.svelte';
	import type { Item } from '$lib/types';

	let items: Item[];
	let pages: number;
	let page = 0;
	$: {
		fetch(`https://hn.algolia.com/api/v1/search_by_date?query=svelte&tags=story&page=${page}`)
			.then((r) => r.json())
			.then((data) => {
				items = data.hits;
				pages = data.nbPages;
			});
	}
</script>

<Header />

{#if items}
	<div class="items">
		{#each items as item}
			<div class="section">
				<NewsItem {item} />
			</div>
		{/each}
		{#if pages && pages > 1}
			<div class="section">
				<Pagination {pages} {page} setPage={(p) => (page = p - 1)} />
			</div>
		{/if}
	</div>
{:else}
	<Loader />
{/if}

<style>
	.section {
		margin: 8px;
	}
	.items {
		margin: 10px;
	}
</style>
