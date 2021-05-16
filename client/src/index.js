import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Assets/CSS/Font.css';
import reducer from './Redux/reducers';
import { Provider } from 'react-redux';
import configureStore from './Store/store';
import Routes from './Routes/Routes';

const store = configureStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
