import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from './reducer';
import 'semantic-ui-css/semantic.min.css';
import './style/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import 'font-awesome/css/font-awesome.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import initialState from './reducer/initialState'
import App from './components/App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';



const store= createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);


/* global document */
/* eslint-disable react/jsx-filename-extension */
render(
    <Provider store={store}>
        <App /> 
    </Provider>,document.getElementById('root'));
//registerServiceWorker();
