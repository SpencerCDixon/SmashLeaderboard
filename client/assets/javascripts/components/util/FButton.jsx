import React, { findDOMNode, Component, PropTypes } from 'react';
import BaseComponent from '../BaseComponent';

class FButton extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('handleClick');
  }

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    let classNames = "button " + (this.props.classNames ? this.props.classNames : '' )
    return (
      <button className={classNames} onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

export default FButton
