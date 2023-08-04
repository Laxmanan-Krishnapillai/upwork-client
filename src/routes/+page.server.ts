import {SECRET_CONTENT_TOKEN} from "$env/static/private";
import { PUBLIC_CONTENT_URL } from "$env/static/public";
import { GraphQLClient } from 'graphql-request';
import { gql } from 'graphql-request';
export async function load({ fetch }) {
      const hygraph = new GraphQLClient(
          PUBLIC_CONTENT_URL,
          {
            headers: {
              Authorization: `Bearer ${SECRET_CONTENT_TOKEN}`
            }
          }
        );
    const QUERY = gql`
    {
      works {
        media {
          url
          mimeType
        }
        slug
        name,
        client {
          industry
          location
        }
      }
    }`
    const {works} = await hygraph.request(QUERY)
    console.log(works)
    return {
        works
    }
}