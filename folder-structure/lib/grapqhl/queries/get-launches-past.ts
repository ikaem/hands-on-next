import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
  query GetLaunchesPast($limit: Int! = 10) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;
