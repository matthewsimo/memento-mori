<script lang="ts">
	import { onMount } from 'svelte';
	import { opacityTransition } from './classes';
	import { waitFor } from './utils';

	type Quote = {
		q: string;
		author: string;
		source?: string;
	};

	const quotes: Quote[] = [
		{
			q: `Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, and while it is in your power, be good.`,
			author: `Marcus Aurelius`,
			source: `Meditations`
		},
		{
			q: `Begin at once to live, and count each separate day as a separate life.`,
			author: `Seneca`
		},
		{
			q: `Our care should not be to have lived long as to have lived enough.`,
			author: `Seneca`
		},
		{
			q: `You want to live but do you know how to live? You are scared of dying and tell me, is the kind of life you lead really any different from being dead?`,
			author: `Seneca`
		},
		{
			q: `I cannot escape death, but at least I can escape the fear of it.`,
			author: `Epictetus`
		},
		{
			q: `Let each thing you would do, say, or intend, be like that of a dying person.`,
			author: `Marcus Aurelius`
		},
		{
			q: `It is not death that a man should fear, but rather he should fear never beginning to live.`,
			author: `Marcus Aurelius`,
			source: `Meditations`
		}
	];

	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	let mounted = false;
	let hideQuote = false;
	onMount(async () => {
		mounted = true;
		await waitFor(9000);
		hideQuote = true;
	});

	$: opacity = mounted ? 'opacity-100' : 'opacity-0';
</script>

<div
	class={`p-20 ${opacityTransition} delay-200 duration-1000 ${
		mounted && !hideQuote ? 'opacity-100' : 'opacity-0'
	}`}
>
	<figure class="space-y-10">
		<blockquote class="text-6xl font-bold leading-snug">
			{quote.q}
		</blockquote>
		<figcaption class="text-2xl text-right font-light">
			&mdash; {quote.author}
			{#if quote.source}
				<cite class="text-xl font-thin block">{quote.source}</cite>
			{/if}
		</figcaption>
	</figure>
</div>
