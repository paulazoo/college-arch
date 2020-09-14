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

// Custom Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import EventDetails from './EventDetails';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
    height: '40vh',
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function CreateEvent(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={6}>
        <Typography className={classes.text}>Create Event</Typography>
      </Grid>
      <EventDetails />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
