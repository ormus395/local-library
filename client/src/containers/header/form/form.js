import React, { Component } from "react";

class Form extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="form">
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </label>
        <input
          type="submit"
          onClick={() => this.props.handleSubmit({ ...this.state })}
          value={this.props.title}
        />
      </div>
    );
  }
}

export default Form;
