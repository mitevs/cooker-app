import { ApolloClient, HttpLink, ApolloLink, InMemoryCache } from 'apollo-boost'

const httpLink = new HttpLink({ uri: 'http://localhost:8080/api/v1/graphql' })

const authLink = new ApolloLink((operation, forward) => {
  const token = window.APP.TOKEN || ''

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token,
    },
  })

  // Call the next link in the middleware chain.
  return forward(operation)
})

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache().restore(window.APP.STATE),
})
