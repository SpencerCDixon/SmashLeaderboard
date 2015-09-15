import { createSelector } from 'reselect';

const userSelector = state => state.users;
const charSelector = state => state.characters;
const matchSelector = state => state.matches;

export const smashSelector = createSelector(
  userSelector,
  charSelector,
  matchSelector,
  (users, characters, matches) => {
    return {
      users: {
        data: users.items,
        isFetching: users.isFetching,
        lastUpdated: users.lastUpdated
      },
      characters: {
        data: characters.items,
        isFetching: characters.isFetching,
        lastUpdated: characters.lastUpdated
      },
      matches: {
        data: matches.items
      }
    }
  }
)


