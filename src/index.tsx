import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/fonts/webfonts.css';
import { Provider } from 'react-redux';
import configureStore from './State/store';
 
const store = configureStore();
ReactDOM.render(
  <>
     <Provider store={store}>
     <App />
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
