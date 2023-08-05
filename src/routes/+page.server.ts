import { gql } from 'graphql-request';
import { Hygraph } from '$lib/server/db';
import type { PageServerLoad } from './$types';

type Media = {
	url: string;
	mimeType: string;
};
type Work = {
	name: string;
	url: string;
	media: Media[];
	client: {
		industry: string;
		location: string;
	};
	services: {
		name: string;
	}[];
	date: string;
};

const load: PageServerLoad = async ({ fetch }) => {
	const QUERY = gql`
		{
			works {
				media {
					url
					mimeType
				}
				slug
				name
				client {
					industry
					location
				}
				services {
					name
				}
				date
			}
		}
	`;
  const { works }: { works: Work[] } = await Hygraph.request(QUERY);

	return {
		works
	};
};
