const initialState = {
  user: {
    user: {
      account_type: 'Mentee',
    },
    isMaster: false,
  },
  account: {
    account: {},
  },
  home: {
    onMobile: false,
    personalSnackbar: {
      open: false,
      content: '',
    },
    currentlyLoading: false,
  },
  master: {
    users: [],
    mentors: {},
    mentees: {},
    newsletterEmails: [],
  },
  events: {
    publicEvents: {},
    events: {},
    allEvents: {},
  },
};

export default initialState;
