import React from "react";
import PracticePage from "./practices/PracticePage";
import Header from './common/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './home/HomePage';
import PageNotFound from './exceptions/PageNotFound';
import ConsultantPage from './consultants/ConsultantPage';
import AboutPage from './common/About';
import Auth from '../Auth/Auth';
import Callback from './common/Callback';
import Profile from './common/Profile';

class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <div className="container-fluid p-3 my-3 bg-light text-dark">
          <Header auth={this.auth}/>
          <Switch>
              <Route exact path="/" 
                render={props => <HomePage auth={this.auth} {...props}/> }/>
              <Route path="/practices" render={props => <PracticePage auth={this.auth}/> } />  
              <Route path="/consultants" render={props => <ConsultantPage auth={this.auth}/> }/>   
              <Route path="/about" component={AboutPage}/>                          
              <Route path="/callback" render={props => <Callback auth={this.auth} {...props}/>}/>
              <Route path="/profile" render={ (props) =>
               this.auth.isAuthenticated() ? <Profile auth={this.auth} {...props}/> : <Redirect to="/"/> }  />
              <Route component={PageNotFound}/>
          </Switch>        
      </div>
    );
  }
}

export default App;
