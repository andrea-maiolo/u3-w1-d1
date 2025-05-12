import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className={this.props.className}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
