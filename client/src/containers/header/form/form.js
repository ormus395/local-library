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

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
  };

  render() {
    return (
      <div className="form">
        <form action="/api/auth/login" method="POST">
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
          <input type="submit" value={this.props.title} />
        </form>
      </div>
    );
  }
}

export default Form;
