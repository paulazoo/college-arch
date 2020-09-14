import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';
import moment from 'moment';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { getEvents } from '../../store/actions/api';

// Custom Components
import EventsList from './EventsList';

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

function Past(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getEvents();
  }, []);

  return (
    <>
      {props.events && Object.keys(props.events).length > 0 && (
        <EventsList
          points={Object.values(props.events).filter(
            (e) =>
              !e.end_time ||
              typeof e.end_time === 'undefined' ||
              moment(e.end_time).isBefore(moment())
          )}
          title='Your Past Events'
          more='past'
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  events: state.events.events,
});

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Past);
