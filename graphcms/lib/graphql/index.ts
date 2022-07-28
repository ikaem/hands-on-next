import { GraphQLClient } from 'graphql-request';

const { GRAPHCMS_ENDPOINT, GRAPHCMS_API_KEY = null } = process.env;

console.log({GRAPHCMS_API_KEY, GRAPHCMS_ENDPOINT})

const authorization = `Bearer ${GRAPHCMS_API_KEY}`;

export const graphqlClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
  headers: {
    ...(GRAPHCMS_API_KEY && { authorization }),
  },
});


