<script lang="ts">
	import {PortableText} from '@portabletext/svelte'

	export let data;
	// console.log(data)
	
	data.experiences[0].description.forEach((desc) => {
		console.log(desc)
	})
</script>

<!-- =====PERSONAL INFO===== -->
<div class="tooltip tooltip-right tooltip-accent" data-tip="Click to know more about me :)">
	<a href="/about" class="font-bold text-2xl ease-in duration-200 hover:text-3xl hover:text-accent"
		>{data.personalInfo?.firstName} {data.personalInfo?.lastName}</a
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
		<div>
			{uni.schoolName} - {uni.degree} in {uni.coursework} <br>
			{new Date(uni.startDate).toLocaleString('en-US', { month: 'long', year: 'numeric' })} - {new Date(uni.endDate).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
		</div>
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
		>
		EXPERIENCES
	</a>
</div>

{#each data.experiences as exp}
	<li>
		<span class="font-bold text-lg">{exp.role} - {exp.companyName}</span>
		{new Date(exp.startDate).toDateString()} - {new Date(exp.endDate).toDateString()}
		{#if exp.description}
			<PortableText value={exp.description} />
		{/if}
	</li>
{/each}

<!-- =====PROJECTS===== -->
<div class="divider divider-neutral"></div>
<div
	class="tooltip tooltip-right tooltip-accent"
	data-tip="Get a deeper dive into my projects :)"
>
	<a
		href="/experience"
		class="font-bold text-xl ease-in duration-200 hover:text-2xl hover:text-accent underline"
		>
		PROJECTS
	</a>
</div>

{#each data.projects as project}
	<li>
		<span class="font-bold text-lg">{project.projectName} </span>
		{new Date(project.startDate).toDateString()} - {new Date(project.endDate).toDateString()}
		{#if project.description}
			<p>{project.description}</p>
		{/if}	
		
	</li>
{/each}