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
        <span>{this.props.player_one} fought {this.props.player_two}</span>
      </FPanel>
    )
  }
}

export default Match
