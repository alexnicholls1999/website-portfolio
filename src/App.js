import React from "react";
import { Switch, Route } from "react-router-dom";
import firebase from "./firebase/utils";
import useAuth from "./firebase/useAuth";
import LoginLayout from "./Layouts/LoginLayout";

import MainLayout from "./Layouts/MainLayout";
import Login from "./Pages/Login";

import Work from "./Pages/Work";
import useProjects from "./react-hooks/useProjects";
import Protected from "./RouteGuards/Protected";
import RedirectToLogin from "./RouteGuards/RedirectToLogin";

const initAttemptedRoute = "/";

function App() {

  const {state, showSPA, showVintageMovies} = useProjects()
  const {isAuthenticated, loading, signInEmailUser} = useAuth(firebase.auth);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Switch>
      <Protected authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} exact path="/">
        <MainLayout 
          showSPA={showSPA}
          spa={state.spa}
          showVintageMovies={showVintageMovies}
          vintagemovies={state.vintageMovies}
        >
          <Work showSPA={showSPA} showVintageMovies={showVintageMovies}/>
        </MainLayout>
      </Protected>
      <RedirectToLogin authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/login">
        <LoginLayout>
          <Login signInEmailUser={signInEmailUser}/>
        </LoginLayout>
      </RedirectToLogin>
    </Switch>
  );
}

export default App;
