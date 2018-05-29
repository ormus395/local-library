import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./containers/landing/landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </div>
    );
  }
}

export default App;
