import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import initialState from '../reducer/initialState'
import rootReducer from '../reducer';


const store= createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);


export default store;