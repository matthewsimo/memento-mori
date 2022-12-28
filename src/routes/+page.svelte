<script lang="ts">
	import { onMount } from 'svelte';
	import { waitFor } from '../lib/utils';
	import Grid from '../lib/Grid.svelte';

	let mounted = false;
	let hideQuote = false;
	onMount(async () => {
		mounted = true;
		await waitFor(4000);
		hideQuote = true;
		await waitFor(800);
		showGrid = true;
	});

	let showGrid = false;

	const quote = {
		q: `Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, and while it is in your power, be good.`,
		author: `Marcus Aurelius`,
		source: `Meditations`
	};

	// @TODO - Add more quotes
	// @TODO - Randomize & auto advance quotes
	// @TODO - Enter DOB input
	// @TODO - Store DOB in localstorage
	// @TODO - Use DOB for grid calc

	$: opacityTransition = `transition-opacity ease-in-out duration-200`;
</script>

<h1
	class={`text-center uppercase font-black text-5xl py-10 pb-16 ${opacityTransition}  ${
		mounted ? 'opacity-100' : 'opacity-0'
	}`}
>
	Momento Mori
</h1>

{#if showGrid}
	<Grid />
{:else}
	<div
		class={`p-20 ${opacityTransition} delay-300 duration-500 ${
			mounted && !hideQuote ? 'opacity-100' : 'opacity-0'
		}`}
	>
		<figure class="space-y-10">
			<blockquote class="text-6xl font-bold leading-snug">
				{quote.q}
			</blockquote>
			<figcaption class="text-2xl text-right font-light">
				&mdash; {quote.author} <cite>{quote.source}</cite>
			</figcaption>
		</figure>
	</div>
{/if}
