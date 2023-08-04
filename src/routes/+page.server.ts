import { Hygraph } from "$lib/server/db";
import { gql } from 'graphql-request';
export async function load({ fetch }) {
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
    }`
    const {works} = await hygraph.request(QUERY)

    return {
        works
    }
}