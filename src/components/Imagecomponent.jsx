import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.imageSource} alt={this.props.imageAlt} />
        <p className={this.props.classText}>Foto presa da lorem picsum</p>
      </div>
    );
  }
}

export default ImageComponent;
