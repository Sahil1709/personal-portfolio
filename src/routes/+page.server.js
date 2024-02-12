import { client } from '$lib/sanity.js';

export const load = async ({ params }) => {
    console.log(params);
    return {
        personalInfo: await client.fetch('*[_type == "personalInfo"][0]'),
        universities: await client.fetch('*[_type == "education"] | order(from desc) [0...2]'),
        experiences: await client.fetch('*[_type == "experience"] | order(from desc) [0...2]'),
    }
}