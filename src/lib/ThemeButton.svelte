<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});

	let themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
		'dim',
		'nord',
		'sunset'
	];
</script>

<div class="dropdown dropdown-botton dropdown-end float-right">
	<div tabindex="0" role="button" class="btn m-1">
		Theme
		<svg
			width="12px"
			height="12px"
			class="h-2 w-2 fill-current opacity-60 inline-block"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 2048 2048"
			><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg
		>
	</div>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
		{#each themes as theme}
			<li>
				<input
					type="radio"
					name="theme-dropdown"
					class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
					aria-label={theme}
					value={theme}
					data-set-theme={theme}
					data-act-class="ACTIVECLASS"
				/>
			</li>
		{/each}
	</ul>
</div>
