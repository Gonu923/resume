import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <br/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
