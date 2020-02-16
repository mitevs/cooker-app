import { InMemoryCache } from 'apollo-boost'
import ApolloClient from 'apollo-boost'

export default new ApolloClient({
  uri: 'http://localhost:8080/api/v1/graphql',
  cache: new InMemoryCache().restore(window.APP.STATE),
})
