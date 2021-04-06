import React from "react";
import { Switch, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import Work from "./Pages/Work";

function App() {
  return (
    <Switch>
      <Route path="/">
        <MainLayout>
          <Work />
        </MainLayout>
      </Route>
    </Switch>
  );
}

export default App;
