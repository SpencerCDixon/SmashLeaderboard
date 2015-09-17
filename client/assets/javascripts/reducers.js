import { CharacterFilters } from './actions';
import { ADD_CHARACTER, SET_CHARACTER_FILTER } from './actions';
import { combineReducers} from 'redux';
import { REQUEST_CHARACTERS,
         RECEIVE_CHARACTERS,
         REQUEST_USERS,
         RECEIVE_USERS,
         SAVE_MATCH_START,
         SAVE_MATCH_SUCCESS,
         REQUEST_MATCHES,
         RECEIVE_MATCHES,
         UPDATE_CURRENT_MATCH } from './actions';

const initialState      = { characterFilter: CharacterFilters.SHOW_ALL };
const initialFetchState = { isFetching: false, didInvalidate: false, items: [] };
const initialSaveState  = { isSaving: false, didInvalidate: false, items: [] };

function characters(state = initialFetchState, action) {
  switch (action.type) {
  case REQUEST_CHARACTERS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_CHARACTERS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.characters,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

function characterFilter(state = initialState, action) {
  switch (action.type) {
  case SET_CHARACTER_FILTER:
    return Object.assign({}, state, {
    characterFilter: action.filter
  });
  default:
    return state;
  }
}

function users(state = initialFetchState, action) {
  switch (action.type) {
  case REQUEST_USERS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_USERS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.users,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

function matches(state = initialFetchState, action) {
  switch (action.type) {
  case REQUEST_MATCHES:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
  case RECEIVE_MATCHES:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.matches,
      lastUpdated: action.receivedAt
    });
  case SAVE_MATCH_START:
    return Object.assign({}, state, {
      isSaving: true,
      didInvalidate: false
    });
  case SAVE_MATCH_SUCCESS:
    return Object.assign({}, state, {
      isSaving: false,
      didInvalidate: false,
      items: action.matches,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

function currentMatch(state = {
  players: { playerOne: '', playerTwo: '', playerThree: '', playerFour: '', },
  chars: { playerOneChar: '', playerTwoChar: '', playerThreeChar: '', playerFourChar: '' }
}, action) {
  switch (action.type) {
  case UPDATE_CURRENT_MATCH:
    return Object.assign({}, state, {
      players: action.currentMatch.players,
      chars: action.currentMatch.chars
    });
  default:
    return state;
  }
}

const smashLeaderboard = combineReducers({
  characters,
  characterFilter,
  users,
  matches,
  currentMatch
});

export default smashLeaderboard;
