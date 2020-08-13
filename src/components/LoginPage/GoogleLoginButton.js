import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import LogRocket from 'logrocket';

// Redux
import { connect } from 'react-redux';
import { getLogin } from '../../store/actions/api';
import { userLogout, setCurrentlyLoading } from '../../store/actions/index';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function GoogleLoginButton(props) {
  const classes = useStyles();

  const [errorDisplayOpen, setErrorDisplayOpen] = useState(false);
  const [errorText, setErrorText] = useState(
    'Login error. Please refresh the page to try again'
  );

  const getLoginCallback = (account) => {
    LogRocket.identify(account.id, {
      name: account.name,
      email: account.email,
      google_id: account.google_id,
    });
  };

  const responseGoogle = (response) => {
    console.log(response);
    props.setCurrentlyLoading(true);
    sessionStorage.setItem('user_token', response.tokenId);
    props.getLogin(response.tokenId, getLoginCallback);
  };

  const responseGoogleErrors = (response) => {
    console.log(response);
    switch (response.error) {
      case 'popup_closed_by_user':
        break;
      case 'idpiframe_initialization_failed':
        setErrorText('Login error- ensure that cookies are enabled to login.');
        break;
      default:
        setErrorDisplayOpen(true);
        break;
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID}
      buttonText='Log in with Google'
      onSuccess={responseGoogle}
      onFailure={responseGoogleErrors}
      cookiePolicy='single_host_origin'
    />
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  accounts: state.master.accounts,
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getLogin: (userToken) => dispatch(getLogin(userToken)),
    setCurrentlyLoading: (currentlyLoading) =>
      dispatch(setCurrentlyLoading(currentlyLoading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLoginButton);
