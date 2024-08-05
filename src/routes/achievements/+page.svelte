<script>
	export let data;
	console.log(data.personalInfo);
</script>

{#each Object.entries(data.personalInfo) as [key, value]}
	<p>{key}: {value}</p>
{/each}


<div class="mt-8">
	<h1 class="text-3xl font-bold">About Me</h1>
	<div class="avatar">
		<div class="w-40 rounded-full">
			<img src={imgUrl} alt="My pic" />
		</div>
	</div>
	<p class="mt-4 text-gray-600">{data.personalInfo.firstName}</p>
</div>