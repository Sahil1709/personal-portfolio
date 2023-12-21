<script lang="ts">
	import ThemeButton from '$lib/ThemeButton.svelte';

	export let data;
	console.log(data.universities);
	console.log(data.personalInfo);
</script>

<ThemeButton />

<div class="tooltip tooltip-right tooltip-accent" data-tip="Click to know more about me :)">
	<a href="/about" class="font-bold text-2xl ease-in duration-200 hover:text-3xl hover:text-accent"
		>{data.personalInfo.firstName} {data.personalInfo.lastName}</a
	>
</div>
<br />
<a href="mailto:{data.personalInfo.email}">{data.personalInfo.email}</a> |
<a href="tel:{data.personalInfo.phone}">{data.personalInfo.countryCode} {data.personalInfo.phone}</a
> <br />
<a class="link link-primary" href={data.personalInfo.linkedin}>{data.personalInfo.linkedin}</a> |
<a class="link link-primary" href={data.personalInfo.github}>{data.personalInfo.github}</a>
<div class="divider divider-neutral"></div>
<div class="tooltip tooltip-right tooltip-accent" data-tip="View all my degrees :)">
	<a
		href="/education"
		class="font-bold text-xl ease-in duration-200 hover:text-2xl hover:text-accent underline"
		>EDUCATION</a
	>
</div>
{#each data.universities as uni}
	<li>{uni.universityName} {uni.from}</li>
{/each}
