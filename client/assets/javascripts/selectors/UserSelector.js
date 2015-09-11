import { createSelector } from 'reselect';

const userSelector = state => state.users;
const charSelector = state => state.characters;

export const smashSelector = createSelector(
  userSelector,
  charSelector,
  (users, characters) => {
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
      }
    }
  }
)


