import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider as ReduxProvider} from 'react-redux';
import configureStore from './redux/configure-store';

import './resources/sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * TODO: delete this my sketch
 * <React.StrictMode>
 </React.StrictMode>
 */

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
