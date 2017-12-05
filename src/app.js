import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routes/AppRouter'
import Store from './store/Store'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const jsx = (
  <Provider store={Store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));