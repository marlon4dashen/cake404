import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop'
import About from './pages/About'
import Product from './pages/Product'
import Products from './pages/Products'
import User from './pages/User'
import Error from './pages/Error'
import { Component } from 'react';

class App extends Component {
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/:userid" element={<User />} />
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </Router>
    )
  }
}

export default App;
