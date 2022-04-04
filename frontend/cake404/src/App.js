import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="products">
          <Products />
        </Route>
        <Route path="/:userid">
          <User />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default App;
