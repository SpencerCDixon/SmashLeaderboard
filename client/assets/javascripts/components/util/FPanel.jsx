import React, { findDOMNode, Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = { isCallout: PropTypes.bool }
const defaultProps = { isCallout: false }

class FPanel extends Component {
  render() {
    let classes = classNames({
      panel: true,
      callout: this.props.isCallout
    })

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}

FPanel.propTypes = propTypes;
FPanel.defaultProps = defaultProps;

export default FPanel
