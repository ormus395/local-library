import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    value: "",
    catagory: "",
    catagories: ["Genre", "Book", "Author"]
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    let options = this.state.catagories.map((catagory, i) => {
      return <option value={this.state.catagories[i]}>{catagory}</option>;
    });
    return (
      <div>
        <form onSubmit={this.handleSumbit}>
          <input
            type="text"
            onChange={this.handleChange}
            name="value"
            placeholder="Search the Catalog"
            value={this.state.value}
          />
          <select
            name="catagory"
            value={this.state.catagory}
            onChange={this.handleChange}
          >
            {options}
          </select>
          <button type="submit">
            <i class="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
