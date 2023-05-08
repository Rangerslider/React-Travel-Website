import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './components/Home/Service';
import Product from './components/Home/Product';
import SignUp from './components/Home/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/service' component={Service} />
          <Route path='/products' component={Product} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;