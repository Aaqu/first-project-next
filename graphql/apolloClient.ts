import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const authorizedApolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
  }
});




