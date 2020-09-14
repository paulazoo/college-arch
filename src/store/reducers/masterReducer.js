import initialState from './initialState';

export default function masterReducer(state = initialState.master, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'SET_MENTORS':
      return {
        ...state,
        mentors: action.payload,
      };

    case 'SET_MENTEES':
      return {
        ...state,
        mentees: action.payload,
      };

    case 'SET_NEWSLETTEREMAILS':
      return {
        ...state,
        newsletterEmails: action.payload,
      };

    default:
      return state;
  }
}
