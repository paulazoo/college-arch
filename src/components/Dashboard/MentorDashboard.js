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
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import ProfileCard from '../ProfilePic/ProfileCard';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function MentorDashboard(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container direction='column' spacing={1}>
        {props.user.mentees &&
          props.user.mentees.map((mentee) => (
            <Grid item>
              <ProfileCard account={mentee.account} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorDashboard);
