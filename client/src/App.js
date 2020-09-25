import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Trainers from './components/Trainers';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/register" tabindex="-1" aria-disabled="true">Sign Up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/profile" tabindex="-1" aria-disabled="true">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/trainers" tabindex="-1" aria-disabled="true">Trainers</a>
      </li>
    </ul>
  </div>
</nav>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/trainers" component={Trainers}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
