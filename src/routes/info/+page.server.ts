import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
export async function load({ fetch }) {
    const Hygraph = new GraphQLClient(
        "https://eu-west-2.cdn.hygraph.com/content/cljb9ttgd2n9r01ue92y14we5/master0"
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