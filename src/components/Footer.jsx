import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className={this.props.className}>
        <p>&copy; React test</p>
      </footer>
    );
  }
}

export default Footer;
