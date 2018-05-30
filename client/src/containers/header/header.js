import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import * as actions from "../../store/actions/authActions/auth";

import Modal from "../../components/ui/modal/modal";
import Form from "./form/form";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isLogin: false
    };
  }

  handleShow = e => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleClick = e => {
    this.setState({ isLogin: e.target.name === "login" });
    this.handleShow();
  };

  handleSubmit = userData => {
    console.log(userData);
    this.props.login(userData);
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
      case false:
        return [
          <li key="login">
            <button name="login" onClick={this.handleClick}>
              Login
            </button>
          </li>,
          <li key="register">
            <button name="register" onClick={this.handleClick}>
              Register
            </button>
          </li>
        ];
        break;
      default:
        return [
          <li key="logout">
            <a href="/api/auth/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <header>
        {this.state.showModal ? (
          <main>
            <Modal show={this.state.showModal} handleShow={this.handleShow}>
              <Form
                title={this.state.isLogin ? "Login" : "Register"}
                handleSubmit={this.handleSubmit}
              />
            </Modal>
          </main>
        ) : null}
        <nav className="nav">
          <ul className="nav-items">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            {this.renderContent()}
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     login: userData => {
//       dispatch(actions.login(userData));
//     }
//   };
// };

export default connect(mapStateToProps, actions)(Header);
