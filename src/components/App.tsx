import React from "react";
import PracticePage from "./practices/PracticePage";
import Header from './common/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import PageNotFound from './exceptions/PageNotFound';
import ConsultantPage from './consultants/ConsultantPage';
import AboutPage from './common/About';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container-fluid p-3 my-3 bg-light text-dark">
          <Header/>
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/practices" component={PracticePage}/>  
              <Route path="/consultants" component={ConsultantPage}/>   
              <Route path="/about" component={AboutPage}/>            
              <Route component={PageNotFound}/>
          </Switch>        
      </div>
    );
  }
}

export default App;
