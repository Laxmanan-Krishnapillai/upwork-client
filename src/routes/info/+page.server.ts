import { gql } from 'graphql-request';
import { GraphQLClient } from 'graphql-request';
type Service = {
  name: string;
}
type Client = {
  name: string;
}
export async function load({ fetch }) {
    const Hygraph = new GraphQLClient(
        "https://eu-west-2.cdn.hygraph.com/content/cljb9ttgd2n9r01ue92y14we5/master"
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
    const {services, clients}: {services: Service[], clients: Client[]} = await Hygraph.request(QUERY)
    return {
        services,
        clients
    }
}