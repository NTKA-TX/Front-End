import React from 'react'

//router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//styles
import { Nav } from '../styles/styled-components'

//imgs
import logo from '../images/logo-edit.png'

//components
import Home from './Home'
import About from './About'

export const AppRouter = () => {
    return (
      <Router>
        <Nav>
          <Link to="/"><img src={logo} style={{height: '80px'}} ></img></Link>
          <Link to="/" >Home</Link>
          <Link to="/about">About</Link>
          <Link>Contact</Link>
          <a href='https://www.google.com/'><img src='https://www.paypalobjects.com/digitalassets/c/website/marketing/na/us/logo-center/15_nowaccepting_blue_badge.jpg' style={{height: '40px'}} ></img></a>
        </Nav>
  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  };