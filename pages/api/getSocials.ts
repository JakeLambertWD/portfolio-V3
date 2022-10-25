import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

const query = groq`*[_type == "social"]`;

type Data = {
	socials: Social[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	// use our query to fetch data from Sanity
	const socials: Social[] = await sanityClient.fetch(query);

	res.status(200).json({ socials });
}
