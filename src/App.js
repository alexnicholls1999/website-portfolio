import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginLayout from "./Layouts/LoginLayout";

import MainLayout from "./Layouts/MainLayout";
import Login from "./Pages/Login";

import Work from "./Pages/Work";
import useProjects from "./react-hooks/useProjects";

function App() {

  const {state, showSPA} = useProjects()

  return (
    <Switch>
      <Route exact path="/">
        <MainLayout 
          showSPA={showSPA}
          spa={state.spa}
        >
          <Work showSPA={showSPA}/>
        </MainLayout>
      </Route>
      <Route path="/login">
        <LoginLayout>
          <Login />
        </LoginLayout>
      </Route>
    </Switch>
  );
}

export default App;
