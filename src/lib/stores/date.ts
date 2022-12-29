import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

let date: Writable<string>;

if (browser) {
	date = writable<string>(window.localStorage.date || '');
	date.subscribe((value) => (window.localStorage.date = value));
}

export { date };
