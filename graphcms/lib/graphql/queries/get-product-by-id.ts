import { gql } from 'graphql-request';

export const GET_PRODUCT_BY_ID = gql`
  query MyQuery($ids: [ID!]) {
    products(where: { id_in: $ids }) {
      id
      name
      price
      slug
      description
      images {
        id
        url
      }
    }
  }
`;
