import React, { findDOMNode, Component, PropTypes } from 'react';

const playerList = [
  "Spencer",
  "Joel",
  "Frank",
  "Dan",
  "Jacob",
  "Krishna"
]
const characterList = [
  "Ness",
  "Samus",
  "Donkey Kong",
  "Marth",
  "Link"
]

class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let players = playerList.map(function(player) {
      return <option>{player}</option>
    });
    characterList.map(function(char) { return <option>{char}</option> });
  
    return (
      <div>
        <h1> Player {this.props.playerNumber} </h1>
        <select ref="playerChoice">
          <option></option>
          {players}
        </select>

        <select ref="characterChoice">
          <option></option>
          {characterList.map(function(char) { 
              return <option>{char}</option> 
            })
          }
        </select>
      </div>
    )
  }
}


export default Player
