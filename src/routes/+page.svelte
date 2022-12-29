<script lang="ts">
	import { onMount } from 'svelte';
	import { waitFor } from '../lib/utils';
	import Grid from '../lib/Grid.svelte';
	import Quote from '../lib/Quote.svelte';
	import { opacityTransition } from '../lib/classes';
	import { date } from '../lib/stores/date';

	let mounted = false;
	let showQuote = true;
	let showDate = false;
	onMount(async () => {
		mounted = true;
		showQuote = true;
		await waitFor(500);
		if (!hasDate) {
			showDate = true;
		}
		await waitFor(9_500);
		showQuote = false;
	});

	const handleChange = async () => {
		if (hasDate) {
			await waitFor(500);
			showDate = false;
		}
	};

	$: hasDate = Boolean($date) && parseInt($date.split('-')[0]) > 1900;
	$: opacity = mounted ? 'opacity-100' : 'opacity-0';
</script>

<h1 class={`text-center uppercase font-black text-5xl py-10 pb-16 ${opacityTransition} ${opacity}`}>
	Memento Mori
</h1>

{#if showQuote}
	<Quote />
{:else if !hasDate || showDate}
	<div
		class={`mx-auto flex flex-1 gap-4 justify-center items-center ${opacityTransition} ${
			hasDate ? 'opacity-0' : 'opacity-100'
		}`}
	>
		<label for="dob" class="text-3xl font-thin">Date of birth:</label>
		<input
			name="dob"
			class="text-3xl rounded-sm p-1 bg-slate-100 text-neutral-700 inline-block my-10"
			type="date"
			bind:value={$date}
			on:change={handleChange}
		/>
	</div>
{:else}
	<Grid date={$date} />
{/if}

<style>
	input::-webkit-calendar-picker-indicator {
		filter: invert(29%) sepia(0%) saturate(0%) hue-rotate(198deg) brightness(78%) contrast(90%);
	}
</style>
