import React from 'react';
import BaseComponent from './BaseComponent';

class MatchList extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind();
  }
  render() {
    let matches = this.props.matches.data.map(function(match) {
      return <li>{match.p_one_id} fought {match.p_two_id}</li>
    });
    return (
      <div>
        <h1> Match List </h1>
        <ul>
          {matches}
        </ul>
      </div>
    )
  }
}

export default MatchList
