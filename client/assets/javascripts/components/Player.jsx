import React, { findDOMNode, Component, PropTypes } from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
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
