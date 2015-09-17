import React, { findDOMNode, Component, PropTypes } from 'react';
import BaseComponent from './BaseComponent';

const propTypes = {
  onPlayerChange: React.PropTypes.func.isRequired,
}

class Player extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('getPlayerChoice', 'getCharacterChoice', 'reset');
  }

  getPlayerChoice() {
    return findDOMNode(this.refs.playerChoice).value;
  }

  getCharacterChoice() {
    return findDOMNode(this.refs.characterChoice).value;
  }

  // Avoid storing players in store by manipulating DOM
  // Not best practice but saves a lot of work
  reset() {
    findDOMNode(this.refs.playerChoice).value = '';
    findDOMNode(this.refs.characterChoice).value = '';
  }

  render() {
    let players = this.props.users.map(function(player) {
      return <option value={player.id} key={player.id}>{player.first_name}</option>
    });
    let characters = this.props.characters.map(function(char) { 
      return <option value={char.id} key={char.id}>{char.name}</option>
    });
    return (
      <div>
        <h1> Player {this.props.playerNumber} </h1>
        <select ref="playerChoice" onChange={this.props.onPlayerChange}>
          <option></option>
          {players}
        </select>

        <select ref="characterChoice" onChange={this.props.onPlayerChange}>
          <option></option>
          {characters}
        </select>
      </div>
    )
  }
}

Player.propTypes = propTypes;

export default Player
