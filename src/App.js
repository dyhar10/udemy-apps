import React, { Component } from 'react';
import { 
  BrowserRouter as Router , 
  Switch ,
  Route,
  Redirect
 } from 'react-router-dom';

 import Nav from './components/nav';
 import Form from './components/form';
import counters from './components/counters';
import userData from './components/userData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {Auth: false};
    console.log('App - counstructor');
  }
 
  componentDidMount(){
    // ajax call 
    console.log('App - Mounted');
  }

 
  render() {
    console.log('App - rendering')
   const PrivatRoute = ({ component:Component, ...rest }) => ( 
    <Route {...rest} render={ (props) => (
      this.state.Auth === true ?
      <Component { ...rest} />
     :<Redirect to='/any' />
    ) } />
   )   

    return (
      <React.Fragment>
        <Router>
          <Nav />
          <Form />
          <Switch>
          <Route exact path="/" component={ counters } />
          <PrivatRoute exact path="/user" component= { userData } />
          
          <Route path="*" render={()=><h1>404</h1>} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

