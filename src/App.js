import React from 'react';
import theme from "./config/theme.js";
import GlobalStyles from "./config/GlobalStyles";
import {ThemeProvider} from 'styled-components';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import '../src/App.css';


// Custom Hooks
import useAuth from "./services/firebase/useAuth";

// Components 

import Login from "./Views/Login";
import Work from "./Views/Work";
import About from "./Views/About";
import Navbar from "./Components/Navbar";

// Firebase 

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config/firebase";

let initAttemptedRoute = "/";

function Protected({ authenticated, children, ...rest }) {
  initAttemptedRoute = useLocation().pathname;

  return (
    <Route 
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

function RedirectToDash({ authenticated, children, ...rest}){
  return (
    <Route
      {...rest}
      render={({ location }) => 
        !authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: initAttemptedRoute,
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}


function App() {

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


  const { isAuthenticated, signInEmailUser} = useAuth(firebase.auth);


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Switch>
        <Protected authenticated={isAuthenticated} exact path="/">
          <Work />
        </Protected>
        <RedirectToDash authenticated={isAuthenticated} path="/login">
          <Login 
            signInEmailUser={signInEmailUser}
          />
        </RedirectToDash>
        <Protected authenticated={isAuthenticated} path="/about">
          <About />
        </Protected>
      </Switch>
    </ThemeProvider>
  )
}

export default App;