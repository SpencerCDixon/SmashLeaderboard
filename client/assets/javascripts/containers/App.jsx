import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCharacterFilter, CharacterFilters } from '../actions';
// Import any components I'll need

const propTypes = {
  visibleCharacters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string
  })),
  characterFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_MOST_USED',
    'SHOW_LEAST_USED'
  ]).isRequired
}

class App extends React.Component {
  render() {
    const { dispatch, characterFilter } = this.props
    return (
      <div>
        <h1> 
          Current Filter: {this.props.characterFilter}
        </h1>
      </div>
    )
  }
}

App.propTypes = propTypes;

function select(state) {
  return {
    characterFilter: state.characterFilter
  }
}


export default connect(select)(App);
