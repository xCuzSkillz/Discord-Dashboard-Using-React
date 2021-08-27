import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Dashboard from "./Pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
