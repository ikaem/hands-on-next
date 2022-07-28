import { gql } from 'graphql-request';

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      price
      description
      images(first: 1) {
        id
        url
      }
    }
  }
`;
