import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Section from './Section';
import Footer from './Footer';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../../helpers';
import { Button, Header } from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
      super(props);
      //this.state = { authenticated: null, userinfo: null };
      //this.checkAuthentication = checkAuthentication.bind(this);
      this.login = this.login.bind(this);
    }
  
    async componentDidMount() {
      
    }
  
    async componentDidUpdate() {
      
    }
  
    async login() {
      this.props.auth.login('/');
    }
  
    render() {
        return (
             <div>
        {this.props.authenticated !== null &&
        <div>
          <Header as="h1">Implicit Flow w/ Okta Hosted Login Page</Header>
          {this.props.authenticated &&
            <div>
              <p>Welcome back, {this.props.userinfo.name}!</p>
              <p>
                You have successfully authenticated against your Okta org, and have been redirected back to this application.  You now have an ID token and access token in local storage.
                Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
              </p>
              <h3>Next Steps</h3>
              <p>Currently this application is a stand-alone front end application.  At this point you can use the access token to authenticate yourself against resource servers that you control.</p>
              <p>This sample is designed to work with one of our resource server examples.  To see access token authentication in action, please download one of these resource server examples:</p>
             
              <p>Once you have downloaded and started the example resource server, you can visit the <a href="/messages">My Messages</a> page to see the authentication process in action.</p>
            </div>
          }
          {!this.props.authenticated &&
            <div>
              <p>If you&lsquo;re viewing this page then you have successfully started this React application.</p>
             
              <p>
                When you click the login button below, you will be redirected to the login page on your Okta org.
                After you authenticate, you will be returned to this application with an ID token and access token.  These tokens will be stored in local storage and can be retrieved at a later time.
              </p>
              <Button id="login-button" primary onClick={this.login}>Login</Button>
            </div>
          }

        </div>
        }
      </div>
        );
    }
}
const mapStateToProps = state => ({
  authenticated : state.authReducer.authenticated,
  userinfo : state.authReducer.userinfo
});



const mapDispatchToProps = (dispatch) => ({

});



Home.propTypes = {
  userinfo: PropTypes.array,
  authenticated: PropTypes.bool.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Home));