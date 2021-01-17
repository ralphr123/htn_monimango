import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/LandingPage/LandingPage';
import Main from './pages/MainPage/MainPage';
import { Navigation, Route, glide  } from 'react-tiger-transition';
import "react-tiger-transition/styles/main.min.css";
import './App.css';
import DetailsPage from './pages/DetailsPage/DetailsPage';

// Animations

glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});



function App() {
  return (
    <Router>
      <Navigation>
        <Route exact path = "/"><Home/></Route>
        <Route exact path = "/main"><Main/></Route>
        <Route path="/main/:ticker"><DetailsPage/></Route>
      </Navigation>
    </Router>
  );
}

export default App;
