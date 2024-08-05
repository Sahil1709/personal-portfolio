import { client } from '$lib/sanity.js';

export async function load({ params }) {
    return {
        personalInfo: await client.fetch('*[_type == "user"]{...,"imageUrl": profile.asset -> url}[0]'),
    }
}