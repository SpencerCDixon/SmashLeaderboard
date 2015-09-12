import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Actions for fetching state
import { setCharacterFilter, CharacterFilters } from '../actions';
import { fetchCharacters } from '../actions';
import { fetchUsers } from '../actions';

// Memoized Selector
import { smashSelector } from '../selectors/UserSelector';

// My 'Dumb' Components
import Match from '../components/Match';

const propTypes = {
  visibleCharacters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  }))
  // filter: PropTypes.oneOf([
    // 'SHOW_ALL',
    // 'SHOW_MOST_USED',
    // 'SHOW_LEAST_USED'
  // ]).isRequired
}

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCharacters());
    dispatch(fetchUsers());
  }

  render() {
    const { dispatch, characterFilter, characters } = this.props
    // let smashCharacters = this.props.characters.data.map(function(char) {
      // return (
        // <li>
          // <img src={char.image} width='100px' />
          // <h3>{char.name}</h3>
        // </li>
      // )
    // });

    // let users = this.props.users.data.map(function(user) {
      // return (
        // <li>
          // <h1>{user.first_name}</h1>
        // </li>
      // )
    // });

    return (
      <div className="row">
        <Match {...this.props} /> 
      </div>
    )
  }
}

App.propTypes = propTypes;

export default connect(smashSelector)(App);
