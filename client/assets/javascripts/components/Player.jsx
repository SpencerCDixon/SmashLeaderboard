import React, { findDOMNode, Component, PropTypes } from 'react';
import BaseComponent from './BaseComponent';

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
      return <option key={player.id}>{player.first_name}</option>
    });
    let characters = this.props.characters.map(function(char) { 
      return <option key={char.id}>{char.name}</option>
    });
  
    return (
      <div>
        <h1> Player {this.props.playerNumber} </h1>
        <select ref="playerChoice">
          <option></option>
          {players}
        </select>

        <select ref="characterChoice">
          <option></option>
          {characters}
        </select>
      </div>
    )
  }
}


export default Player
