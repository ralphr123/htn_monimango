import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/LandingPage';
import Main from './pages/MainPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path = "/main" component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;
