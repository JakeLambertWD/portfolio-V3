import { PageInfo } from '../typings';

export const fetchPageInfo = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getInfo`);

	// json() returns a promise which resolves by parsing the body text as JSON
	const data = await res.json();

	// type check
	const pageInfo: PageInfo[] = data.pageInfo;

	return pageInfo;
};
