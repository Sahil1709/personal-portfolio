<script>
	export let data;
</script>

{#each Object.entries(data.personalInfo) as [key, value]}
	<p>{key}: {value}</p>
{/each}
