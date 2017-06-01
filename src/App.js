import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
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
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;