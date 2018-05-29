import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authAction from '../action/AuthAction';

export class AuthService{
    constructor(){
        
    }
}

AuthService.propTypes = {
    action: PropTypes.object.isRequired,
    userinfo: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired
};


const mapStateToProps = state => ({
    authenticated : state.authReducer.authenticated,
    userinfo : state.authReducer.userinfo
});



const mapDispatchToProps = (dispatch) => ({
    action: bindActionCreators(authAction, dispatch)
});



export default connect(mapStateToProps, mapDispatchToProps)(AuthService);