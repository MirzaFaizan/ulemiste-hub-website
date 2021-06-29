import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    link: createHttpLink({
        uri: process.env.NEXT_WORDPRESS_GRAPHQL_ENDPOINT,
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache(),
    ssrMode: true
});

export default client;
