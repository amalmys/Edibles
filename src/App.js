import "./App.css";
import React, { Component } from "react";
import basicLayout from "../src/layouts/basicLayout";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/select-plan" component={basicLayout} />
          <Route path="/home" component={basicLayout} />
          <Route path="/about-us" component={basicLayout} />
          <Route path="/diet-plans" component={basicLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
