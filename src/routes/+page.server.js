import { client } from '$lib/sanity.js';

export const load = async ({ params }) => {
    return {
        personalInfo: await client.fetch('*[_type == "user"][0]'),
        universities: await client.fetch('*[_type == "education"] | order(startDate desc) [0...2]'),
        experiences: await client.fetch('*[_type == "experience"] | order(startDate desc) [0...2]'),
        projects: await client.fetch('*[_type == "project"] | order(startDate desc) [0...2]'),
        achievements: await client.fetch('*[_type == "achievement"] | order(startDate desc) [0...2]'),
        research_papers: await client.fetch('*[_type == "research"] | order(startDate desc) [0...2]'),
        certificates: await client.fetch('*[_type == "certificate"] | order(startDate desc) [0...2]'),
        skills: await client.fetch('*[_type == "skill"] | order(startDate desc) [0...2]'),
    }
}