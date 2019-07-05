import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import About from './components/About'
import Profile from './components/Profile'
import {Link, Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Logout from './components/Logout'
import Nav from './components/Nav';
import Register from './components/Register';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">    
      <BrowserRouter>
      <Nav  />
      <div>
          <Switch>
          <Route exact path="/register" component={Register} />
         <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route  path="/logout" component={Logout} />
      </Switch>
      </div>
      <Footer />
      </BrowserRouter>
      </div>        
    )
  }
}

export default App;
