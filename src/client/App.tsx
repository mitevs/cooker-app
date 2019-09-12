import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';
import App from '@shared/App';

export default () => <BrowserRouter>
    <ApolloProvider client={client}>
        <App></App>
    </ApolloProvider>
</BrowserRouter>;
