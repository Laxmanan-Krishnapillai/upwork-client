import { gql } from 'graphql-request';
import { Hygraph } from '$lib/server/db';
import type { PageServerLoad } from './$types';
const load: PageServerLoad = async ({ fetch }) => {
	const QUERY = gql`
		{
			services {
				name
			}
			clients {
				name
			}
		}
	`;
	const { services, clients } = await Hygraph.request(QUERY);
	console.log(services, clients);
	return {
		services,
		clients
	};
};
export { load };
