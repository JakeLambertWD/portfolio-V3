import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Experience } from '../../typings';

// here we are saying query everything, and w/ technologies we want to expand them into an array
const query = groq`
	*[_type == "experience"] {
		...,
		technologies[]->
	}
`;

type Data = {
	experiences: Experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// use our query to fetch data from Sanity
	const experiences: Experience[] = await sanityClient.fetch(query);

	res.status(200).json({ experiences });
}
