import { client } from '$lib/sanity.js';

export async function load({ params }) {
    return {
        personalInfo: await client.fetch('*[_type == "personalInfo"][0]'),
        universities: await client.fetch('*[_type == "education"] | order(from) [0...2]'),
    }
}