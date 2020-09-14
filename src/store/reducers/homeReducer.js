import initialState from './initialState';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case 'SET_PERSONALSNACKBAR':
      return {
        ...state,
        personalSnackbar: { ...action.payload },
      };

    case 'SET_CURRENTLYLOADING':
      return {
        ...state,
        currentlyLoading: action.payload,
      };

    case 'SET_ONMOBILE':
      return {
        ...state,
        onMobile: action.payload,
      };

    default:
      return state;
  }
}
