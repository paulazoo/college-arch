import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import ProfileCard from '../ProfilePic/ProfileCard';

const useStyles = makeStyles((theme) => ({
  cardsIntro: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function MenteeDashboard(props) {
  const classes = useStyles();

  return (
    <>
      {/* <Typography className={classes.cardsIntro}>Your Google Classroom:</Typography> */}
      {/* <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <Button variant='contained' color='secondary'>
            Go To Google Classroom
          </Button>
        </Grid>
      </Grid>
      <Typography className={classes.cardsIntro}>Your Mentor:</Typography>
      <Grid container direction='column'>
        {props.account.mentor && (
          <>
            <Grid item>
              <ProfileCard user={props.account.mentor.user} />
            </Grid>
          </>
        )}
      </Grid> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  account: state.account.account,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenteeDashboard);
