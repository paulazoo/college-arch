/* eslint-disable import/prefer-default-export */
import history from '../history';

import {
  setUser,
  setAccount,
  setPersonalSnackbar,
  setMentees,
  setMentors,
  setUsers,
  setNewsletterEmails,
  setMenteeApplicants,
  setMentorApplicants,
  setCurrentMenteeApplicant,
  setCurrentMentorApplicant,
  setCurrentlyLoading,
  setPublicEvents,
  setEvents,
  setEvent,
  setAllEvents,
  deleteEvent,
  setMasterUser,
  setIsMaster,
  userLogout,
} from './index';
import { wsConnect } from './websocket';

const api = (path, requestOptions) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, requestOptions).then(
    (res) => {
      // check for error response
      if (!res.ok) {
        // get error message from body or default to response status
        const error = res.status;
        return Promise.reject(error);
      }
      // otherwise return json response
      return res.json();
    }
  );
};

// TODO: fill out error catch with error handler, currentlyLoading
// Order of possible arguments: path, body, callback
// Each api call gets its own action
// Api Calls:

// GET Calls:
export const getUser = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`users/${getState().user.user.id}`, requestOptions)
      .then((response) => {
        dispatch(setUser(response.user));
        dispatch(setAccount(response.account));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getUsers = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`users`, requestOptions)
      .then((response) => {
        console.log(response);
        const preUsers = {};
        response.forEach((user) => {
          console.log(user.id);
          preUsers[user.id] = user;
        });

        dispatch(setUsers(preUsers));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMentors = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`mentors`, requestOptions)
      .then((response) => {
        const preMentors = {};
        response.forEach((mentor) => {
          preMentors[mentor.id] = mentor;
        });
        dispatch(setMentors(preMentors));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMentees = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`mentees`, requestOptions)
      .then((response) => {
        const preMentees = {};
        response.forEach((mentee) => {
          preMentees[mentee.id] = mentee;
        });
        dispatch(setMentees(preMentees));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getNewsletterEmails = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`newsletter_emails`, requestOptions)
      .then((response) => {
        dispatch(setNewsletterEmails(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMenteeApplicants = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`mentee_applicants`, requestOptions)
      .then((response) => {
        dispatch(setMenteeApplicants(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMentorApplicants = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`mentor_applicants`, requestOptions)
      .then((response) => {
        dispatch(setMentorApplicants(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMenteeApplicant = (id) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`mentee_applicants/${id}`, requestOptions)
      .then((response) => {
        dispatch(setCurrentMenteeApplicant(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMentorApplicant = (id) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`mentor_applicants/${id}`, requestOptions)
      .then((response) => {
        dispatch(setCurrentMentorApplicant(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getPublicEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`events/public`, requestOptions)
      .then((response) => {
        const prePublicEvents = {};
        response.forEach((event) => {
          prePublicEvents[event.id] = event;
        });

        dispatch(setPublicEvents(prePublicEvents));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getAllEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`events`, requestOptions)
      .then((response) => {
        const preAllEvents = {};
        response.forEach((event) => {
          preAllEvents[event.id] = event;
        });

        dispatch(setAllEvents(preAllEvents));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`users/${getState().user.user.id}/events`, requestOptions)
      .then((response) => {
        const preEvents = {};
        response.forEach((event) => {
          preEvents[event.id] = event;
        });

        dispatch(setEvents(preEvents));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// POST Calls:
export const postGoogleLogin = (googleToken, callback) => {
  return (dispatch) => {
    dispatch(setCurrentlyLoading(true));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        google_token: googleToken,
      }),
    };
    api(`google_login`, requestOptions)
      .then((response) => {
        if (response.message === 'Logged in!') {
          sessionStorage.setItem('refresh_token', response.refresh_token);
          sessionStorage.setItem('access_token', response.access_token);

          dispatch(setPersonalSnackbar({ open: false, content: '' }));
          dispatch(setUser(response.user));
          dispatch(setAccount(response.account));
          dispatch(setIsMaster(response.user.email));

          dispatch(setCurrentlyLoading(false));

          history.push('/dashboard');

          // callback(response.user);
        } else if (response.message) {
          dispatch(
            setPersonalSnackbar({ open: true, content: response.message })
          );
          dispatch(setCurrentlyLoading(false));
        }
      })
      .catch((error) => {
        // dispatch(
        //   setPersonalSnackbar({
        //     open: true,
        //     content: 'Log in error, please refresh the page',
        //   })
        // );
        dispatch(setCurrentlyLoading(false));
        console.error('API Error: ', error);
      });
  };
};

export const postApplicantGoogleLogin = (googleToken, callback) => {
  return (dispatch) => {
    dispatch(setCurrentlyLoading(true));

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        google_token: googleToken,
      }),
    };
    api(`applicant_google_login`, requestOptions)
      .then((response) => {
        if (response.message === 'Logged in!') {
          sessionStorage.setItem('refresh_token', response.refresh_token);
          sessionStorage.setItem('applicant_token', response.applicant_token);

          dispatch(setPersonalSnackbar({ open: false, content: '' }));
          dispatch(setUser(response.user));

          dispatch(setCurrentlyLoading(false));

          // callback(response.user);
        } else if (response.message) {
          dispatch(
            setPersonalSnackbar({ open: true, content: response.message })
          );
          dispatch(setCurrentlyLoading(false));
        }
      })
      .catch((error) => {
        // dispatch(
        //   setPersonalSnackbar({
        //     open: true,
        //     content: 'Log in error, please refresh the page',
        //   })
        // );
        dispatch(setCurrentlyLoading(false));
        console.error('API Error: ', error);
      });
  };
};

export const putMenteeApplicants = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('applicant_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`users/applicant_update`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Application successfully submitted!`,
          })
        );
        history.push('/apply/submitted');
        dispatch(userLogout());
        window.location.reload();
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const putMentorApplicants = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('applicant_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`users/applicant_update`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Application successfully submitted!`,
          })
        );
        history.push('/apply/submitted');
        dispatch(userLogout());
        window.location.reload();
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postNewsletterEmails = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`newsletter_emails`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Your email ${response.email} was added to our newsletter list!`,
          })
        );
        // dispatch to set state
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postMentors = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentors`, requestOptions)
      .then((response) => {
        if (response.message === 'User already exists') {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Error: User with email ${body.email} already exists!`,
            })
          );
        } else {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Mentor with email ${body.email} was added! Please refresh the page.`,
            })
          );
        }
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postMentees = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentees`, requestOptions)
      .then((response) => {
        if (response.message === 'User already exists') {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Error: User with email ${body.email} already exists!`,
            })
          );
        } else {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Mentee with email ${body.email} was added! Please refresh the page.`,
            })
          );
        }
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postMatch = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentees/${body.mentee_id}/match`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Mentee and mentor matched!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postUnmatch = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentees/${body.mentee_id}/unmatch`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Mentee and mentor unmatched!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postEvents = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`events`, requestOptions)
      .then((response) => {
        dispatch(setEvent({ [response.id]: response }));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Event ${body.name} created!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// Google Sheets Import and Exports (POST):
export const postImportMenteeMentor = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`google_sheets/import_mentee_mentor`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Google sheets data imported into database!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postImportEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`google_sheets/import_events`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Google sheets data imported into database!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postExportRegistered = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({
        event_id: eventId,
      }),
    };
    api(`google_sheets/export_registered`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Database exported into google sheets!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postExportJoined = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({
        event_id: eventId,
      }),
    };
    api(`google_sheets/export_joined`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Database exported into google sheets!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postRegister = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/register`, requestOptions)
      .then((response) => {
        dispatch(
          setEvent({
            [response.id]: response,
          })
        );

        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Registered!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postUnregister = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/unregister`, requestOptions)
      .then((response) => {
        dispatch(
          setEvent({
            [response.id]: response,
          })
        );

        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Unregistered!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postJoin = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/join`, requestOptions)
      .then((response) => {
        dispatch(
          setEvent({
            [response.id]: response,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postPublicRegister = (eventId, body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`events/${eventId}/public_register`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Registered!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// export const postPublicUnregister = (eventId) => {
//   return (dispatch, getState) => {
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
//       },
//       body: JSON.stringify({}),
//     };
//     api(`events/${eventId}/unregister`, requestOptions)
//       .then((response) => {
//         dispatch(
//           setEvent({
//             [response.id]: response,
//           })
//         );

//         dispatch(
//           setPersonalSnackbar({
//             open: true,
//             content: `Unregistered!`,
//           })
//         );
//       })
//       .catch((error) => {
//         console.error('API Error: ', error);
//       });
//   };
// };

export const postPublicJoin = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/public_join`, requestOptions)
      .then((response) => {})
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// PUT Calls:
export const putUser = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`users/${getState().user.user.id}`, requestOptions)
      .then((response) => {
        dispatch(setUser(response));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Profile details saved!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const putMasterUser = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`users/master_update`, requestOptions)
      .then((response) => {
        dispatch(setMasterUser(response));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Profile details saved! Please refresh the page.',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const putEvent = (eventId, body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify(body),
    };
    console.log(body);
    console.log(requestOptions);
    api(`events/${eventId}`, requestOptions)
      .then((response) => {
        dispatch(setEvent({ [response.id]: response }));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Event updated!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const putApplicantStatus = (
  applicantType,
  applicantId,
  applicantStatus
) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
      body: JSON.stringify({ applicant_status: applicantStatus }),
    };
    api(`${applicantType}_applicants/${applicantId}`, requestOptions)
      .then((response) => {
        if (applicantType === 'mentee') {
          dispatch(setCurrentMenteeApplicant(response));
        } else if (applicantType === 'mentor') {
          dispatch(setCurrentMentorApplicant(response));
        }
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Applicant status updated!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// DELETE Calls:
export const deleteEventApi = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`,
      },
    };
    api(`events/${eventId}`, requestOptions)
      .then((response) => {
        dispatch(deleteEvent(eventId));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Event deleted!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};
