<script>
	import '../app.css';
	import ThemeButton from '$lib/ThemeButton.svelte';
	import Navigation from '$lib/Navigation.svelte';
</script>


<Navigation />

<div class="container my-4 shadow-xl mx-auto p-10">
	<ThemeButton />
	<slot />
</div>
