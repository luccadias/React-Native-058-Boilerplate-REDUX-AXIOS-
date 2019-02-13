import React, { Component } from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { Store } from './src/store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes/>
      </Provider>
    );
  }
}
