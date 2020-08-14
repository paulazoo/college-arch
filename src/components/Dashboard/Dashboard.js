import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogRocket from 'logrocket';
import GoogleLogin from 'react-google-login';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  Snackbar,
  Card,
  Divider,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { getLogin, getAccount } from '../../store/actions/api';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MentorDashboard from './MentorDashboard';
import MenteeDashboard from './MenteeDashboard';
import EventsList from '../EventsList/EventsList';
import Upcoming from '../EventsList/Upcoming';
import Past from '../EventsList/Past';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.teamTwo,
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  card: {
    backgroundColor: theme.palette.common.teamTwo,
    // margin: theme.spacing(8),
    padding: theme.spacing(8),
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 48,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    props.getAccount();
    LogRocket.identify(props.account.id, {
      name: props.account.name,
      email: props.account.email,
      google_id: props.account.google_id,
    });
  }, []);

  const renderRightDashboard = () => {
    if (props.account.user_type === 'Mentor') {
      return (
        <>
          <MentorDashboard />
        </>
      );
    }
    if (props.account.user_type === 'Mentee') {
      return (
        <>
          <MenteeDashboard />
        </>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={12}>
          <Card className={classes.card} elevation={0}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
            >
              <Grid item xs={12}>
                <Typography className={classes.text}>
                  {`Welcome, ${props.account.name}!`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {renderRightDashboard()}
              </Grid>
              <Upcoming />
              <Past />
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getLogin: (userToken, callback) => dispatch(getLogin(userToken, callback)),
    getAccount: () => dispatch(getAccount()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
