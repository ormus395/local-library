import React, { Component } from "react";
import { connect } from "react-redux";

import Carousel from "../../components/ui/carousel/carousel";
import SearchBar from "../../components/search-bar/searchBar";

class Landing extends Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Carousel />
        <SearchBar />
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
