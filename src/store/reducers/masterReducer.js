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

    case 'SET_MENTEEAPPLICANTS':
      return {
        ...state,
        menteeApplicants: action.payload,
      };

    case 'SET_MENTORAPPLICANTS':
      return {
        ...state,
        mentorApplicants: action.payload,
      };

    case 'SET_CURRENTMENTEEAPPLICANT':
      return {
        ...state,
        currentMenteeApplicant: action.payload,
      };

    case 'SET_CURRENTMENTORAPPLICANT':
      return {
        ...state,
        currentMentorApplicant: action.payload,
      };

    default:
      return state;
  }
}
