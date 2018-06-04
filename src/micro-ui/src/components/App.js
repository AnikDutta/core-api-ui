import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback, Auth } from '@okta/okta-react';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import CourseListContainer from './course/CourseListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditCourseContainer from './course/AddOrEditCourseContainer'; // eslint-disable-line import/no-named-as-default
import About from './About';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default
import config from '../.samples.config';
import Navbar from '../Navbar';

const history = createBrowserHistory();
class App extends React.Component{
    constructor(){
        super();
    }

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
                                <SecureRoute exact path="/add_edit/:id" component={AddOrEditCourseContainer} />
                                <Route component={CourseListContainer} />
                            </Switch>
    
                        </div>
                    </Security>
                </Router>
            </div>
        );
    }

}


export default App;