import React, { Component } from 'react';
import '../App.css';
import DashboardComponent from '../screens/DashboardScreen/DashboardComponent';
import SingleUserComponent from '../screens/UserScreen/SingleUserComponent';
import LoginComponent from '../screens/LoginScreen/LoginComponent';
import CardComponent from './CardComponent';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

//returnerar CardComponent med en <h4> + info
function User() {
  return (
    <div className = "wrapper">
    <CardComponent>
      <h4 style={{textAlign: 'center', marginTop: '50px'}}>You didn't select any user!</h4>
    </CardComponent>
    </div>
  );
}

//Renderar en Navbar med tre länkar och hanterar all logik för React Router
class NavBarComponent extends Component {

  //skickar användaren vidare till /login
  Redirect = () => {
    return <Redirect to = '/login'/>
  }

  render() {
    return (
      <Router>
        <div>
          <NavLink to = '/login' activeClassName="my-class">Login</NavLink>
          <NavLink to = '/dashboard' activeClassName="my-class">Dashboard</NavLink>
          <NavLink to = '/user' activeClassName="my-class">User</NavLink>
          <Route exact path = '/' component = {this.Redirect} />
          <Route path = '/login' component={LoginComponent} />
          <Route path = '/dashboard' component={DashboardComponent} />
          <Route exact path = '/user' component={User} />
          <Route exact path = '/user/:id' render={(props) => <SingleUserComponent {...props} /> } />
        </div>
      </Router>
    );
  }
}

export default NavBarComponent;
