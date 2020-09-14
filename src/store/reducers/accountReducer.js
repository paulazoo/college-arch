import initialState from './initialState';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return {
        ...state,
        account: action.payload,
      };

    default:
      return state;
  }
}
