import * as ActionType from './ActionType';
import AuthorApi from '../api/AuthorApi';
import { ApiCallBeginAction } from './ApiAction';
import store from '../store/store';



export const getAuthResponse = (authenticated, userinfo) => ({
    type: ActionType.AUTHENTICATION_RESPONSE,
    authenticated,userinfo
});

export function checkAuthentication(authService) {
    return async (dispatch, getState) => {
       
        const authenticated = await authService.isAuthenticated();
        if (authenticated !== getState().authReducer.authenticated) {
            if (authenticated && !getState().authReducer.userinfo) {
                const userinfo = await authService.getUser();
                dispatch(getAuthResponse(authenticated,userinfo));
            } else {
                dispatch(getAuthResponse(authenticated,null));
            }
        }

        console.log(`State ---`,getState());
    }
  }
  

