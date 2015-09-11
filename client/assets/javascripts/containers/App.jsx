import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCharacterFilter, CharacterFilters } from '../actions';
import { fetchCharacters } from '../actions';
import { fetchUsers } from '../actions';
import { smashSelector } from '../selectors/UserSelector';
// Import any components I'll need

const propTypes = {
  visibleCharacters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  })),
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_MOST_USED',
    'SHOW_LEAST_USED'
  ]).isRequired
}

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCharacters());
    dispatch(fetchUsers());
  }

  render() {
    const { dispatch, characterFilter, characters } = this.props
    let smashCharacters = this.props.characters.data.map(function(char) {
      return (
        <li>
          <img src={char.image} width='100px' />
          <h3>{char.name}</h3>
        </li>
      )
    });

    let users = this.props.users.data.map(function(user) {
      return (
        <li>
          <h1>{user.first_name}</h1>
        </li>
      )
    });

    return (
      <div className="row">
        <div className="large-6 columns">
          <ul>
            {smashCharacters}
          </ul>
        </div>
        <div className="large-6 columns">
          <ul>
            {users}
          </ul>
        </div>
      </div>
    )
  }
}

App.propTypes = propTypes;

export default connect(smashSelector)(App);
