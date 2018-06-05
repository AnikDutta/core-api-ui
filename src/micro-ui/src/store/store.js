import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import initialState from '../reducer/initialState'
import rootReducer from '../reducer';
import logger from 'redux-logger'


const store= createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk,logger)
);


export default store;