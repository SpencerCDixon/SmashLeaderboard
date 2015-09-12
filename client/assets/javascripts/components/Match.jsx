import React from 'react';
import Player from './Player';
import FoundationButton from './util/FoundationButton';

class Match extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="large-3 columns">
          <Player playerNumber={1}/>
        </div>
        <div className="large-3 columns">
          <Player playerNumber={2}/>
        </div>
        <div className="large-3 columns">
          <Player playerNumber={3}/>
        </div>
        <div className="large-3 columns">
          <Player playerNumber={4}/>
        </div>

        <FoundationButton classNames="success">
          Create Match
        </FoundationButton>
      </div>
    )
  }
}

export default Match
