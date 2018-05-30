import React, { Component } from "react";
import "./modal.css";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }
  render() {
    let style = {
      transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: this.props.show ? "1" : "0"
    };

    return (
      <div className="Modal" style={style}>
        {this.props.children}
        <button className="btn" onClick={this.props.handleShow}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
