import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const authReducer = (state = initialState.authReducer, action) => {
    switch(action.type) {
        case ActionType.AUTHENTICATION_RESPONSE: {
            
            return {
                ...state, authenticated : action.authenticated, userinfo : Object.assign([], action.userinfo)
            };
        }


        default: { return state; }
    }
};



export default authReducer;