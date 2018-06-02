import React, { Component } from "react";
import { connect } from "react-redux";
import "./landing.css";
import Carousel from "../../components/ui/carousel/carousel";
import SearchBar from "../../components/search-bar/searchBar";
import Main from "./main/main";
class Landing extends Component {
  state = {
    news: [1, 2, 3]
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Carousel />
        <SearchBar />
        <Main news={this.state.news} />
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
