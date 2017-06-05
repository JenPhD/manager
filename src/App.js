import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';;
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAnMQxTem24CKnh74zdFzPAQoaFpDbk8SM',
      authDomain: 'manager-6202a.firebaseapp.com',
      databaseURL: 'https://manager-6202a.firebaseio.com',
      projectId: 'manager-6202a',
      storageBucket: 'manager-6202a.appspot.com',
      messagingSenderId: '321114193097'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
}
