import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory, useLocation } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { postGoogleLogin } from '../../store/actions/api';

// Theme
import { withStyles } from '@material-ui/core/styles';

function GoogleLoginButton(props) {
  const history = useHistory();
  const location = useLocation();
  const [errorDisplayOpen, setErrorDisplayOpen] = useState(false);
  const [errorText, setErrorText] = useState(
    'Login error. Please refresh the page to try again'
  );

  const postGoogleLoginCallback = (data) => {
  };

  const handleSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorDisplayOpen(false);
  };

  const responseGoogle = (response) => {
    props.postGoogleLogin(response.tokenId, postGoogleLoginCallback);
  };

  const responseGoogleErrors = (response) => {
    switch (response.error) {
      case 'popup_closed_by_user':
        break;
      case 'idpiframe_initialization_failed':
        setErrorText('Login error- ensure that cookies are enabled to login.');
        setErrorDisplayOpen(true);
        break;
      default:
        setErrorDisplayOpen(true);
        break;
    }
  };

  return (
    <>
      <Snackbar
        open={errorDisplayOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleSnackbarClose}
          severity='error'
        >
          {errorText}
        </MuiAlert>
      </Snackbar>

      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID}
        onSuccess={responseGoogle}
        onFailure={responseGoogleErrors}
        cookiePolicy='single_host_origin'
      />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    postGoogleLogin: (googleToken, callback) =>
      dispatch(postGoogleLogin(googleToken, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton);
