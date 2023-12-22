<script>
	export let data;
	let imgUrl = data.personalInfo.imageUrl;
	console.log(data.personalInfo);
</script>

{#each Object.entries(data.personalInfo) as [key, value]}
	<p>{key}: {value}</p>
{/each}
<div class="avatar">
	<div class="w-40 rounded-full">
		<img src={imgUrl} alt="My pic" />
	</div>
</div>
