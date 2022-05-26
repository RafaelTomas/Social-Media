import React from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import App from './App';

const httpLink = new HttpLink({
  uri: 'http://localhost:5000',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
