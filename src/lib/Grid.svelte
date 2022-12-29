<script lang="ts">
	import { onMount } from 'svelte';
	import differenceInWeeks from 'date-fns/differenceInWeeks';

	import { chunk } from '../lib/utils';

	export let date;

	console.log({ date });

	const weeksPerYear = 52;
	const totalYears = 90;

	let numberOfWeeks = weeksPerYear * totalYears;
	let arrayOfQuarters = chunk(
		Array.from(Array(numberOfWeeks)).map((_v, i) => i),
		13
	);
	let start = new Date(date);
	let now = new Date();
	let diff = differenceInWeeks(now, start);

	let mounted = false;
	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 0);
	});

	$: opacityTransition = `transition-opacity ease-in-out duration-100 ${
		mounted ? 'opacity-100' : 'opacity-0'
	}`;
</script>

<div class="grid lg:gap-2 gap-1 grid-cols-[repeat(4,_1fr)]">
	{#each arrayOfQuarters as quarter, i}
		<div
			data-quarter-id={i % 4}
			class={`grid gap-x-0 gap-y-1 grid-cols-[repeat(13,_1fr)] ${
				Math.floor(i / 4) % 5 === 4 ? 'mb-2' : ''
			}`}
		>
			{#each quarter as week}
				<span
					data-week-id={week}
					style:transition-delay={`${(week / 52) * 10 + (week % 52) * 12}ms`}
					title={`Week ${week} of ${numberOfWeeks} - ${((week / numberOfWeeks) * 100).toFixed(1)}%`}
					class={`${opacityTransition} h-3 w-3 text-transparent ${
						week > diff ? 'bg-slate-300' : week === diff ? 'bg-orange-500' : 'bg-neutral-800'
					} rounded-full cursor-default ${week === diff && mounted && 'animate-ping '}`}
					>{week}</span
				>
			{/each}
		</div>
	{/each}
</div>
