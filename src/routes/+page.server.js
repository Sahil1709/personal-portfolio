import { client } from '$lib/sanity.js';

export const load = async ({ params }) => {
    return {
        personalInfo: await client.fetch('*[_type == "user"][0]'),
        universities: await client.fetch('*[_type == "education"] | order(startDate desc) [0...2]'),
        experiences: await client.fetch('*[_type == "experience"] | order(startDate desc) [0...2]'),
    }
}