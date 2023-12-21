<script lang="ts">
	export let data;
	console.log(data);
</script>

<!-- =====PERSONAL INFO===== -->
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

<!-- =====EDUCATION===== -->
<div class="divider divider-neutral"></div>
<div class="tooltip tooltip-right tooltip-accent" data-tip="View all my degrees :)">
	<a
		href="/education"
		class="font-bold text-xl ease-in duration-200 hover:text-2xl hover:text-accent underline"
		>EDUCATION</a
	>
</div>
{#each data.universities as uni}
	<li>{uni.universityName} {new Date(uni.from).toDateString()}</li>
{/each}

<!-- =====EXPERIENCES===== -->
<div class="divider divider-neutral"></div>
<div
	class="tooltip tooltip-right tooltip-accent"
	data-tip="All my experiences is just a click away :)"
>
	<a
		href="/experience"
		class="font-bold text-xl ease-in duration-200 hover:text-2xl hover:text-accent underline"
		>EXPERIENCES</a
	>
</div>
{#each data.experiences as exp}
	<li>
		{exp.role} - {exp.companyName}
		{new Date(exp.from).toDateString()} - {new Date(exp.to).toDateString()}
	</li>
{/each}
