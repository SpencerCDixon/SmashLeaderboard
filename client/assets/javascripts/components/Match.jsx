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
          <Player 
            playerNumber={1}
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>
        <div className="large-3 columns">
          <Player 
            playerNumber={2}
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>
        <div className="large-3 columns">
          <Player 
            playerNumber={3}
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>
        <div className="large-3 columns">
          <Player 
            playerNumber={4}
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>

        <FoundationButton classNames="success" onClick={() => alert('hello')}>
          Create Match
        </FoundationButton>
      </div>
    )
  }
}

export default Match
