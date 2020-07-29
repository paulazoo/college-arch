import React, { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Dialog,
  Box,
  CardActions,
  TextField,
  Divider,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';
import LogRocket from 'logrocket';
import GoogleLogin from 'react-google-login';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import {
  postPublicRegister,
  getLogin,
  postPublicJoin,
} from '../../store/actions/api';
import { userLogout, setCurrentlyLoading } from '../../store/actions/index';

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  eventDialog: {
    padding: theme.spacing(4),
  },
  eventCard: {
    width: '100%',
    position: 'relative',
    height: '100%',
    overflow: 'auto',
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 26,
  },
  cardTime: {
    fontSize: 22,
    fontWeight: 'light',
    color: theme.palette.common.gray,
    margin: 0,
  },
  cardHost: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardKind: {
    fontSize: 18,
  },
  cardDesc: {
    fontSize: 16,
  },
  descContainer: {
    wordBreak: 'break-word',
  },
  link: {
    margin: 0,
    textTransform: 'none',
  },
  linkContainer: { wordBreak: 'break-word' },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  loginTextContainer: {
    textAlign: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  spacing: {
    height: theme.spacing(1),
  },
}));

function PublicPopup({
  event,
  publicPopupOpen,
  setPublicPopup,
  type,
  ...props
}) {
  const classes = useStyles();

  const [publicName, setPublicName] = useState('');
  const [publicEmail, setPublicEmail] = useState('');

  const [errorDisplayOpen, setErrorDisplayOpen] = useState(false);
  const [errorText, setErrorText] = useState(
    'Login error. Please refresh the page to try again'
  );

  const handleChangePublicName = (e) => {
    setPublicName(e.target.value);
  };

  const handleChangePublicEmail = (e) => {
    setPublicEmail(e.target.value);
  };

  const handleClosePublicRegisterPopup = () => {
    setPublicPopup(false);
  };

  const handlePublicRegister = () => {
    // TODO: required validation
    props.postPublicRegister(event.id, {
      public_name: publicName,
      public_email: publicEmail,
    });
    setPublicPopup(false);
  };

  const handlePublicJoin = () => {
    props.postPublicJoin(event.id);
    setPublicPopup(false);
  };

  const getLoginCallback = (account) => {
    LogRocket.identify(account.id, {
      name: account.name,
      email: account.email,
      google_id: account.google_id,
    });
  };

  const responseGoogle = (response) => {
    props.setCurrentlyLoading(true);
    sessionStorage.setItem('user_token', response.tokenId);
    props.getLogin(response.tokenId, getLoginCallback);
  };

  const responseGoogleErrors = (response) => {
    switch (response.error) {
      case 'popup_closed_by_user':
        break;
      case 'idpiframe_initialization_failed':
        setErrorText('Login error- ensure that cookies are enabled to login.');
      default:
        setErrorDisplayOpen(true);
    }
  };

  const renderGoogleLogin = () => {
    return (
      <GoogleLogin
        clientId='322643072137-r7mupmjsg74h6g16o6k5vpi7cgsqvlmq.apps.googleusercontent.com'
        buttonText='Log in with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogleErrors}
        cookiePolicy='single_host_origin'
      />
    );
  };

  const renderHeader = () => {
    if (type === 'register') {
      return `Register for ${event.name}`;
    }
    return `Join ${event.name}`;
  };

  return (
    <Dialog
      open={publicPopupOpen}
      onClose={handleClosePublicRegisterPopup}
      className={classes.eventDialog}
    >
      <Card className={classes.eventCard}>
        <CardHeader
          title={(
            <div className={classes.cardTitle}>
              <strong className={classes.nameText}>{renderHeader()}</strong>
            </div>
          )}
          subheader={(
            <div className={classes.cardTime}>
              {event.start_time !== null ? (
                <>
                  {`${moment(event.start_time).format(
                    'ddd, MMMM Do, h:mm A'
                  )} to ${moment(event.end_time).format('h:mm A')}`}
                </>
              ) : (
                <>Always open.</>
              )}
            </div>
          )}
        />
        <CardContent>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            spacing={2}
          >
            <Grid item xs={12} className={classes.loginTextContainer}>
              <Typography className={classes.loginText}>
                Login if Mentor / Mentee
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item>{renderGoogleLogin()}</Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.spacing} />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.spacing} />
            </Grid>
            <Grid item xs={12} className={classes.loginTextContainer}>
              <Typography className={classes.loginText}>OR</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant='outlined'
                fullWidth
                value={publicName}
                onChange={handleChangePublicName}
                label='Your Name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant='outlined'
                fullWidth
                value={publicEmail}
                onChange={handleChangePublicEmail}
                label='Your Email'
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container direction='row' justify='space-between'>
            <Grid item>
              <Button onClick={handleClosePublicRegisterPopup}>Cancel</Button>
            </Grid>
            <Grid item>
              {type === 'register' ? (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handlePublicRegister}
                  type='submit'
                >
                  Register
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handlePublicJoin}
                  type='submit'
                  target='_blank'
                  href={event.public_link}
                  rel='noreferrer'
                >
                  Continue to Public Livestream
                </Button>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  accounts: state.master.accounts,
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    postPublicJoin: (eventId) => dispatch(postPublicJoin(eventId)),
    postPublicRegister: (eventId, body) =>
      dispatch(postPublicRegister(eventId, body)),
    userLogout: () => dispatch(userLogout()),
    getLogin: (userToken) => dispatch(getLogin(userToken)),
    setCurrentlyLoading: (currentlyLoading) =>
      dispatch(setCurrentlyLoading(currentlyLoading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicPopup);
