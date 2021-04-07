import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Work from "./Pages/Work";
import useProjects from "./react-hooks/useProjects";

function App() {

  const {state, showSPA} = useProjects()

  return (
    <Switch>
      <Route path="/">
        <MainLayout 
          showSPA={showSPA}
          spa={state.spa}
        >
          <Work showSPA={showSPA}/>
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
