import React from 'react';
import {withAuth} from '@okta/okta-react';
import { checkAuthentication } from '../helpers';

export default withAuth(class About extends React.Component{

  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  render(){
    return (
      <div className="container">
        <h1>About</h1>
        <p>Est et amet perfecto sententiae, nec error essent eripuit ei. Velit sanctus ut has, partem dolorem atomorum est ad, sumo fabellas electram ex vim.</p>
      </div>
    );
  }
});
