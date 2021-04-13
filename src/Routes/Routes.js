import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Collections from "../pages/collections";

function Routes(props) {
  return (
    <div>
      <Switch>
        <Redirect from="/" to="home" />
      </Switch>
    </div>
  );
}

export default Routes;
