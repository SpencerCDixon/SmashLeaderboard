import React from 'react';
import BaseComponent from './BaseComponent';
import Match from './Match';

class MatchList extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind();
  }
  render() {
    let matches = this.props.matches.data.map(function(match) {
      return <Match key={match.id} {...match} />
    });
    return (
      <div>
        <h1> Match List </h1>
        {matches}
      </div>
    )
  }
}

export default MatchList
