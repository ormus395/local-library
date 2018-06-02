import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    value: ""
  };

  handleChange = e => {};

  handleSumbit = e => {};

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            name="value"
            placeholder="Search the Catalog"
            value={this.state.value}
          />
          <button type="submit">
            <i class="fa fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
