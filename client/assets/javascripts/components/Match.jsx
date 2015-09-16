import React from 'react';
import BaseComponent from './BaseComponent';
import FPanel from './util/FPanel';

class Match extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind();
  }

  render() {
    return (
      <FPanel>
        <span>{this.props.p_one_id} fought {this.props.p_two_id}</span>
      </FPanel>
    )
  }
}

export default Match
