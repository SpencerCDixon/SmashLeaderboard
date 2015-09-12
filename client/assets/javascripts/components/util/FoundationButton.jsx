import React, { findDOMNode, Component, PropTypes } from 'react';

class FoundationButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let classNames = "button " + (this.props.classNames ? this.props.classNames : '' )
    return (
      <button className={classNames}>
        {this.props.children}
      </button>
    )
  }
}

export default FoundationButton
