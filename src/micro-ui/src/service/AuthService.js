import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {checkAuthentication} from '../action/AuthAction';

function authMiddleware() {
    return ({ dispatch, getState }) => next => action => {
      console.log('anik dutta');
      if (action.type == 'API_CALL_BEGIN') {
        //checkAuthentication(action.auth);
        console.log(`middle ware action type`, action);
      }
      return next(action);
    }
  }
  
export const authMiddlewareConst = authMiddleware();