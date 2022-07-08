import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

// const uri = 'https://rwnjssignbook.herokuapp.com/v1/graphql';
const uri = 'https://api.spacex.land/graphql/';
// why this variable here
let apolloClient: ApolloClient<NormalizedCacheObject>;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri }),
    cache: new InMemoryCache(),
  });
};

export const initApollo = (initialState: NormalizedCacheObject = null) => {
  const client = apolloClient || createApolloClient();

  if (initialState) {
    client.cache.restore({
      ...client.extract(),
      ...initialState,
    });
  }

  if (typeof window === 'undefined') {
    return client;
  }

  if (!apolloClient) {
    apolloClient = client;
  }

  return client;
};

export const useApollo = (initialState: NormalizedCacheObject = null) => {
  return useMemo(() => initApollo(initialState), [initialState]);
};
