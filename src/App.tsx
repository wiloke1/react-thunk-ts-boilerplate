import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './configureStore';
import Routes from 'routes';
import configureApp from 'configureApp.json';

axios.defaults.baseURL = configureApp.baseUrl;
axios.defaults.timeout = configureApp.timeout;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
