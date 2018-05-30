import React, { Component } from "react";
import { connect } from "react-redux";

class Landing extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user
  };
};

export default connect(mapStateToProps)(Landing);
