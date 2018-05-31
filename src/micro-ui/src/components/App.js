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
import Profile from './Profile'
import store from '../store/store';
import {checkAuthentication} from '../action/AuthAction';
const history = createBrowserHistory();
const _auth = new Auth({
    issuer:config.oidc.issuer,
    client_id:config.oidc.clientId,
    redirect_uri:config.oidc.redirectUri
})
class App extends React.Component{
    constructor(){
        super();
    }

    async componentDidMount() {
        //this.props.action.checkAuthentication(this.props.auth);
        await store.dispatch(checkAuthentication(_auth));
        console.log(`APP did Mount`,store.getState().authReducer);
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
                                <Route exact path="/" component={Home} />
                                <Route path="/implicit/callback" component={ImplicitCallback} />
                                <SecureRoute path="/courses" component={CourseListContainer} />
                                <SecureRoute exact path="/course" component={AddOrEditCourseContainer} />
                                <SecureRoute path="/profile" component={Profile} /> 
                                <SecureRoute path="/about" component={About} />
                                <Route component={PageNotFound} />
                            </Switch>
    
                        </div>
                    </Security>
                </Router>
            </div>
        );
    }

}


export default App;