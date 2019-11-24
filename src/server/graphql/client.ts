import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  fetch: fetch as any,
})

client.defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
}

export default client