import { Skill } from '../typings';

export const fetchSkills = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

	// json() returns a promise which resolves by parsing the body text as JSON
	const data = await res.json();

	// type check
	const skills: Skill[] = data.skills;

	return skills;
};
