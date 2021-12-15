<script type="ts">
	import Loader from '../components/Loader.svelte';
	import Header from '../components/Header.svelte';
	import NewsItem from '../components/NewsItem.svelte';

	import { onMount } from 'svelte';

	let items;

	onMount(async () => {
		await fetch('https://hn.algolia.com/api/v1/search_by_date?query=svelte&tags=story')
			.then((r) => r.json())
			.then((data) => (items = data.hits));
	});
</script>

<Header />

{#if items}
	<div class="items">
		{#each items as item}
			<NewsItem {item} />
		{/each}
	</div>
{:else}
	<Loader />
{/if}

<style>
	.items {
		margin: 10px;
	}
</style>
