import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import { withAuth } from '@okta/okta-react';
import { checkAuthentication } from '../../helpers';

export default withAuth(class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null, userinfo: null };
      this.checkAuthentication = checkAuthentication.bind(this);
      this.login = this.login.bind(this);
    }
  
    async componentDidMount() {
      this.checkAuthentication();
    }
  
    async componentDidUpdate() {
      this.checkAuthentication();
    }
  
    async login() {
      this.props.auth.login('/');
    }
  
    render() {
        return (
            <div>                
                <Header/>
                <div className="container text-muted">
                    <Section/>
                    <Footer/>
                </div>                
            </div>
        );
    }
  });
