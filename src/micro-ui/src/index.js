import React from 'react';
import {render} from 'react-dom';
import { Provider } from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import './style/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import store from './store/store';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';





/* global document */
/* eslint-disable react/jsx-filename-extension */
render(
    <Provider store={store}>
        <App /> 
    </Provider>,document.getElementById('root'));
//registerServiceWorker();
