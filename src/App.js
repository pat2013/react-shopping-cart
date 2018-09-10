import React, { Component } from "react";
import Router from "./Router";
import { NavLink } from 'react-router-dom'
import './app.css'
import './navigation.css'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
  </nav>
);

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
