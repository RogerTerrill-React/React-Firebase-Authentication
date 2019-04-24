import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import HomeDetails from './components/homes/HomeDetails';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CreateHome from './components/homes/CreateHome';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/home/:id' component={HomeDetails} />
            <Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
            <Route path='/createhome' component={CreateHome} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
