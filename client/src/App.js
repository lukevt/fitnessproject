import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Trainers from './components/Trainers';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
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
