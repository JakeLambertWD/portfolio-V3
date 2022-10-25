import { Social } from '../typings';

export const fetchSocials = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

	// json() returns a promise which resolves by parsing the body text as JSON
	const data = await res.json();

	// type check
	const socials: Social[] = data.socials;

	return socials;
};
