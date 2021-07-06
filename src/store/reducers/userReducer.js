import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'SET_ISMASTER':
      let newIsMaster = false;
      if (
        action.payload === 'paulazhu@college.harvard.edu' ||
        action.payload === 'reachpaulazhu@gmail.com' ||
        action.payload === 'tech.collegearch@gmail.com' ||
        action.payload === 'team.collegearch@gmail.com' ||
        action.payload === 'program.collegearch@gmail.com' ||
        action.payload === 'lleanza01@gmail.com' ||
        action.payload === 'rina.nagashima@gmail.com' ||
        action.payload === 'snalani731@gmail.com' ||
        action.payload === 'llin1@college.harvard.edu' ||
        action.payload === 'lindalin2812@gmail.com'
      ) {
        newIsMaster = true;
      }

      console.log(action.payload);
      console.log('Master? ', newIsMaster);

      return {
        ...state,
        isMaster: newIsMaster,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
