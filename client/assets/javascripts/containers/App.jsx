import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCharacterFilter, CharacterFilters } from '../actions';
import { fetchCharacters } from '../actions';
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
  }

  render() {
    const { dispatch, characterFilter, characters } = this.props
    let smashCharacters = this.props.results.map(function(char) {
      return (
        <li>
          <img src={char.image} width='100px' />
          <h3>{char.name}</h3>
        </li>
      )
    });

    return (
      <div>
        <h1> 
          Current Filter: {this.props.filter}
        </h1>
        <ul>
          {smashCharacters}
        </ul>
      </div>
    )
  }
}

App.propTypes = propTypes;

function select(state) {
  const { characterFilter, characters } = state;
  const {
    isFetching,
    lastUpdated,
    items: results,
  } = characters || {
    isFetching: true,
    items: []
  };

  let filter = characterFilter.characterFilter
  return {
    filter,
    characters,
    results,
    isFetching,
    lastUpdated
  }
}

export default connect(select)(App);
