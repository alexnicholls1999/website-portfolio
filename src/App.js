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
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import GlobalStyles from "./config/GlobalStyles";

const initAttemptedRoute = "/";

function App() {

  const {state, showSPA, showVintageMovies, showWebco, showYourGym} = useProjects()
  const {isAuthenticated, loading, signInEmailUser} = useAuth(firebase.auth);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Protected authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} exact path="/">
          <MainLayout 
            showSPA={showSPA}
            spa={state.spa}
            showVintageMovies={showVintageMovies}
            vintagemovies={state.vintageMovies}
            showWebco={showWebco}
            webco={state.webco}
            yourGym={state.yourgym}
            showYourGym={showYourGym}
          >
            <Work showSPA={showSPA} showVintageMovies={showVintageMovies} showWebco={showWebco} showYourGym={showYourGym}/>
          </MainLayout>
        </Protected>
        <RedirectToLogin authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/login">
          <LoginLayout>
            <Login signInEmailUser={signInEmailUser}/>
          </LoginLayout>
        </RedirectToLogin>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
