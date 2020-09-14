export function setUser(payload) {
  return { type: 'SET_USER', payload };
}

export function setAccount(payload) {
  return { type: 'SET_ACCOUNT', payload };
}

export function setPersonalSnackbar(payload) {
  return { type: 'SET_PERSONALSNACKBAR', payload };
}

export function setCurrentlyLoading(payload) {
  return { type: 'SET_CURRENTLYLOADING', payload };
}

export function setOnMobile(payload) {
  return { type: 'SET_ONMOBILE', payload };
}

export function userLogout(payload) {
  return { type: 'USER_LOGOUT', payload };
}

export function setUsers(payload) {
  return { type: 'SET_USERS', payload };
}

export function setMasterUser(payload) {
  return { type: 'SET_MASTERUSER', payload };
}

export function setMentors(payload) {
  return { type: 'SET_MENTORS', payload };
}

export function setMentees(payload) {
  return { type: 'SET_MENTEES', payload };
}

export function setNewsletterEmails(payload) {
  return { type: 'SET_NEWSLETTEREMAILS', payload };
}

export function setPublicEvents(payload) {
  return { type: 'SET_PUBLICEVENTS', payload };
}

export function setAllEvents(payload) {
  return { type: 'SET_ALLEVENTS', payload };
}

export function setEvents(payload) {
  return { type: 'SET_EVENTS', payload };
}

export function setEvent(payload) {
  return { type: 'SET_EVENT', payload };
}

export function deleteEvent(payload) {
  return { type: 'DELETE_EVENT', payload };
}

export function setIsMaster(payload) {
  return { type: 'SET_ISMASTER', payload };
}
