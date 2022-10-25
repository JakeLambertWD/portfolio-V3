import { Experience } from '../typings';

export const fetchExperiences = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

	// json() returns a promise which resolves by parsing the body text as JSON
	const data = await res.json();

	// type check
	const experiences: Experience[] = data.experiences;

	return experiences;
};
