import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback} from '@okta/okta-react';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddCourseContainer from './course/AddCourseContainer'; // eslint-disable-line import/no-named-as-default
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default
import config from '../.samples.config';

const history = createBrowserHistory();
class App extends React.Component{
 
    async componentDidMount() {
        
    }

    async componentDidUpdate() {
        
    }

    render(){
        return (
            <div >
                <Router history={history}>
                    <Security
                        issuer={config.oidc.issuer}
                        client_id={config.oidc.clientId}
                        redirect_uri={config.oidc.redirectUri}
                        >
                        <div>
    
                            <HeaderNavContainer />
                            <Switch>
                                <SecureRoute exact path="/" component={CourseListContainer} />
                                <Route path="/implicit/callback" component={ImplicitCallback} />
                                <SecureRoute exact path="/add_edit" component={AddCourseContainer} />
                                <SecureRoute path="/add_edit/:id" component={AddCourseContainer} />
                                <SecureRoute component={CourseListContainer} />
                            </Switch>
    
                        </div>
                    </Security>
                </Router>
            </div>
        );
    }

}


export default App;