import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages';
import signinPage from './components/pages/signin';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={signinPage}  />
      </Switch>      
    </Router>
  );
}

export default App;
