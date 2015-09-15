import React, { Component, PropTypes } from 'react';
import BaseComponent from '../components/BaseComponent';
import { connect } from 'react-redux';

// Actions for fetching state
import { CharacterFilters,
         setCharacterFilter,
         fetchCharacters,
         fetchUsers,
         saveMatch,
         fetchMatches } from '../actions';

// Memoized Selector
import { smashSelector } from '../selectors/SmashSelector';

// My 'Dumb' Components
import Match from '../components/Match';
import MatchList from '../components/MatchList';

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

class App extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('addMatch');
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCharacters());
    dispatch(fetchUsers());
    dispatch(fetchMatches());
  }

  addMatch(match) {
    this.props.dispatch(saveMatch(match));
  }

  render() {
    const { dispatch, characterFilter, characters } = this.props
    return (
      <div className="row">
        <Match addMatch={this.addMatch} {...this.props} /> 
        <MatchList matches={this.props.matches} />
      </div>
    )
  }
}

App.propTypes = propTypes;

export default connect(smashSelector)(App);
