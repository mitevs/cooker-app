import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

const client = new ApolloClient({
  uri: 'http://localhost:8080/api/v1/graphql',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch: fetch as any,
})

client.defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
}

export default client
