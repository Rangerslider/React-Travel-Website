import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './components/Home/Service';
import Packages from './components/Home/Packages.js';
import SignUp from './components/Home/SignUp';
import Contact from './components/Home/contact.js';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/service' component={Service} />
          <Route path='/packages' component={Packages} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;