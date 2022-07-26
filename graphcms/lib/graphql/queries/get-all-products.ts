import { gql } from 'graphql-request';

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    products {
      id
      name
      price
      images {
        id
        url
      }
    }
  }
`;

