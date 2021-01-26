import './App.css';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Work from './Pages/Work';
import Login from './Pages/Login';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Work />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
