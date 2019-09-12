import { InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-boost';

export default new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache().restore(window.__APP_STATE__)
    // fetch
});
