import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/authActions/auth";

import Header from "./containers/header/header";
import Landing from "./containers/landing/landing";
import Catalog from "./containers/catalog/catalog";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/catalog" component={Catalog} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
