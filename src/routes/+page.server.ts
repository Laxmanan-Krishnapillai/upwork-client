import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
export async function load({ fetch }) {
    const Hygraph = new GraphQLClient(
        "https://eu-west-2.cdn.hygraph.com/content/cljb9ttgd2n9r01ue92y14we5/master"
    );
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
    const {works} = await Hygraph.request(QUERY)

    return {
        works
    }
}