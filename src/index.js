import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Router';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://powerful-hyena-13.hasura.app/v1/graphql',
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
