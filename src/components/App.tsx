import React from "react";
import PracticePage from "./practices/PracticePage";
import Header from './common/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import PageNotFound from './exceptions/PageNotFound';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid">
          <Header/>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/practices" component={PracticePage}/>            
              <Route component={PageNotFound}/>
          </Switch>        
      </div>
    );
  }
}

export default App;
