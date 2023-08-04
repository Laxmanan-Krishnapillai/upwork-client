import { gql } from 'graphql-request';
import { Hygraph } from "$lib/server/db";

export async function load({ fetch }) {
    const Hygraph = new GraphQLClient(
          PUBLIC_CONTENT_URL,
          {
            headers: {
              Authorization: `Bearer ${SECRET_CONTENT_TOKEN}`
            }
          }
        );
    const QUERY = gql`
    {
      services {
        name
      }
      clients {
        name
      }
    }`
    const {services, clients} = await Hygraph.request(QUERY)
    console.log(services, clients)
    return {
        services,
        clients
    }
}