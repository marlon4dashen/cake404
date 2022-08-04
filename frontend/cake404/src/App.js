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
import SignUp from './pages/SignUp'
import { Component } from 'react';
import NavBar from './components/NavBar';
import ErrorPopup from './components/ErrorPopup';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false,
      userId: "",
      token: ""
    }
    this.host = "http://localhost:8080"
  }

  handleAuth = (authState) => {
    this.setState({auth: authState})
  }

  handleLogIn = (logInData) => {
    fetch(this.host + '/auth/login', {
        method:'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            email: logInData.email,
            password: logInData.password
        })
    }).then(res => {
        if(res.status == 401){
            throw new Error("Validation failed!")
        }
        if(res.status !== 200 && res.status !== 201){
            console.log("Error")
            throw new Error("Authentication failed")
        }
        return res.json()
    }).then(resData => {
        console.log(resData)
        this.setState({
          auth: true,
          userId: resData.userId,
          token: resData.token
        })
    }).catch(err => {
        this.setState({
            error: err.message
        })
    })
  }

  handleSignUp = (signupData) => {
      fetch(this.host + '/auth/signup', {
          method:'PUT',
          headers: {
              'Content-Type': "application/json"
          },
          body: JSON.stringify({
              email: signupData.email,
              username: signupData.username,
              password: signupData.password
          })
      }).then(res => {
          if(res.status == 422){
              throw new Error("Validation failed, make sure the email address isn't used!")
          }
          if(res.status !== 200 && res.status !== 201){
              console.log("Error")
              throw new Error("Creating a user failed")
          }
          return res.json()
      }).then(resData => {
          console.log(resData.userId)
          window.location.replace('/')
      }).catch(err => {
          this.setState({
              error: err.message
          })
      })
  }

  handleError = () => {
    this.setState({
      error: null
    })
  }

  render() {
    return(
      <div>
        <Router>
          <ErrorPopup error={this.state.error} onHandle={this.handleError}/>
          <NavBar auth={this.state.auth} logIn={this.handleLogIn} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop/:select" element={<Shop />} />
            <Route path="/signup" element={<SignUp signUp={this.handleSignUp} />} />
            <Route path="/about" element={<About  />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products" element={<Products />} />
            {this.state.auth && <Route path="/:userid" element={<User auth={this.state.auth} setAuth={this.handleAuth} />} />}
            <Route path="/*" element={<Error />}></Route>
          </Routes>
        </Router>
      </div>

    )
  }
}

export default App;
