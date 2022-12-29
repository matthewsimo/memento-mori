<script lang="ts">
	import '../app.postcss';
	import Texas from '../lib/Texas.svelte';
</script>

<div class="container mx-auto px-6 py-10 lg:px-20 lg:py-24relative flex flex-col min-h-screen">
	<main class="grow">
		<slot />
	</main>
	<footer class={`pt-24 pb-12 z-10 relative text-right`}>
		<small
			>&copy; {new Date().getFullYear()}
			<a
				class={`text-orange-500 underline-offset-auto hover:underline cursor-pointer`}
				href="https://www.matthewsimo.com/about">Matthew Simo</a
			>
			&mdash; Made in Texas
			<span
				class="inline-block w-6 align-middle mr-1"
				title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
			>
				<Texas />
			</span>
		</small>
		<small class="block font-thin text-xs">
			<a href="https://www.flaticon.com/free-icons/skull" title="skull icon"
				>Skull favicon by Andy Horvath</a
			>
		</small>
	</footer>
</div>
