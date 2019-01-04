import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HashRouter } from 'react-router-dom'; 

import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

import './style/style.css'


const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
