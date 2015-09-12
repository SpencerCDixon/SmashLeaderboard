import React from 'react';
import BaseComponent from './BaseComponent';
import Player from './Player';
import FoundationButton from './util/FoundationButton';

class Match extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('createMatch', 'resetPlayers');
  }

  resetPlayers() {
    this.refs.playerOne.reset();
    this.refs.playerTwo.reset();
    this.refs.playerThree.reset();
    this.refs.playerFour.reset();
  }

  createMatch() {
    this.props.addMatch({
      match: {
        playerOne: {
          user: this.refs.playerOne.getPlayerChoice(),
          character: this.refs.playerOne.getCharacterChoice()
        },
        playerTwo: {
          user: this.refs.playerTwo.getPlayerChoice(),
          character: this.refs.playerTwo.getCharacterChoice()
        },
        playerThree: {
          user: this.refs.playerThree.getPlayerChoice(),
          character: this.refs.playerThree.getCharacterChoice()
        },
        playerFour: {
          user: this.refs.playerFour.getPlayerChoice(),
          character: this.refs.playerFour.getCharacterChoice()
        }
      }
    })
    this.resetPlayers()
  }

  render() {
    return (
      <div className="row">
        <div className="large-3 columns">
          <Player 
            ref="playerOne"
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>
        <div className="large-3 columns">
          <Player 
            ref="playerTwo"
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>
        <div className="large-3 columns">
          <Player 
            ref="playerThree"
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>
        <div className="large-3 columns">
          <Player 
            ref="playerFour"
            users={this.props.users.data}
            characters={this.props.characters.data}
          />
        </div>

        <FoundationButton classNames="success" onClick={this.createMatch}>
          Create Match
        </FoundationButton>
      </div>
    )
  }
}

export default Match
