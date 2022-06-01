import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/new-workout">
          <NewWorkout />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
