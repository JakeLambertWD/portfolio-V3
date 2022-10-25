import { Project } from '../typings';

export const fetchProject = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

	// json() returns a promise which resolves by parsing the body text as JSON
	const data = await res.json();

	// type check
	const projects: Project[] = data.projects;

	return projects;
};
