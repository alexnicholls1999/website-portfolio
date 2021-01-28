import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Work from './Pages/Work';
import Login from './Pages/Login';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import useAuth from './firebase/useAuth';
import firebase from './firebase/utils';
import Protected from './RouteGuards/Protected';
import RedirectToLogin from './RouteGuards/RedirectToLogin';
import LoginLayout from './Components/Templates/LoginLayout';
import MainLayout from './Components/Templates/MainLayout';

const initAttemptedRoute = "/"

function App() {

  const { isAuthenticated, signInEmailUser, loading } = useAuth(firebase.auth)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Protected authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} exact path="/">
          <MainLayout>
            <Work />
          </MainLayout>
        </Protected>
        <RedirectToLogin authenticated={isAuthenticated} initAttemptedRoute={initAttemptedRoute} path="/login">
          <LoginLayout>
            <Login signInEmailUser={signInEmailUser}
            />
          </LoginLayout>
        </RedirectToLogin>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
