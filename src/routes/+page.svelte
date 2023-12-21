<script lang="ts">
	import ThemeButton from '$lib/ThemeButton.svelte';
	import { onMount } from 'svelte';
	import { db } from '$lib/firebase';
	import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

	let loading = true;

	interface PersonalInfo {
		firstName: string;
		lastName: string;
		email: string;
		countryCode: string;
		phone: string;
		linkedin: string;
		github: string;
	}

	let personalInfo: PersonalInfo = {
		firstName: '',
		lastName: '',
		email: '',
		countryCode: '',
		phone: '',
		linkedin: '',
		github: ''
	};

	onMount(() => {
		getPersonalInfo().then(() => {
			loading = false;
		});
	});

	const getPersonalInfo = async () => {
		const querySnapshot = await getDocs(collection(db, 'personalInfo'));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, ' => ', doc.data());
			personalInfo = doc.data() as PersonalInfo;
		});
	};
</script>

<ThemeButton />

{#if loading}
	<div class="text-center">
		<span class="loading loading-dots loading-md"></span>
	</div>
{:else}
	<div class="tooltip tooltip-bottom tooltip-accent" data-tip="Click to know more about me :)">
		<a
			href="/about"
			class="font-bold text-2xl ease-in duration-200 hover:text-3xl hover:text-accent"
			>{personalInfo.firstName} {personalInfo.lastName}</a
		>
	</div>
	<br />
	<a href="mailto:{personalInfo.email}">{personalInfo.email}</a> |
	<a href="tel:{personalInfo.phone}">{personalInfo.countryCode} {personalInfo.phone}</a> <br />
	<a class="link link-primary" href={personalInfo.linkedin}>{personalInfo.linkedin}</a> |
	<a class="link link-primary" href={personalInfo.github}>{personalInfo.github}</a>
	<div class="divider divider-neutral"></div>
	<a href="/education" class="font-bold text-xl underline">EDUCATION</a>
{/if}
