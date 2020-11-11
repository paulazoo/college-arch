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
import EventsList from '../EventsList/EventsList';
import { getPublicEvents } from '../../store/actions/api';

// Custom Components

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
  emptyCardListContainer: {
    padding: theme.spacing(4),
    paddingTop: 0,
    width: '100%',
  },
  noEvents: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  noEventsCard: {
    width: theme.spacing(37),
    height: '100%',
    padding: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1),
    fontWeight: 'bold',
    fontSize: 24,
  },
  titleContainer: {
    textAlign: 'left',
    padding: '0px !important',
    paddingLeft: `${theme.spacing(4)} !important`,
  },
  cardListGridContainer: {
    textAlign: 'left',
    padding: '0px !important',
  },
}));

function Public(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getPublicEvents();
  }, []);

  return (
    <>
      {props.publicEvents && Object.keys(props.publicEvents).length > 0 ? (
        <EventsList
          points={Object.values(props.publicEvents).filter(
            (e) =>
              !e.end_time ||
              typeof e.end_time === 'undefined' ||
              moment().isBefore(moment(e.end_time))
          )}
          title='Upcoming Public Events'
          name='public'
        />
      ) : (
        <>
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography className={classes.title}>
              Upcoming Public Events:
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.cardListGridContainer}>
            <div className={classes.emptyCardListContainer}>
              <Grid container direction='row'>
                <Card className={classes.noEventsCard}>
                  <Typography className={classes.noEvents}>
                    No Upcoming Public Events
                  </Typography>
                </Card>
              </Grid>
            </div>
          </Grid>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  publicEvents: state.events.publicEvents,
});

function mapDispatchToProps(dispatch) {
  return {
    getPublicEvents: () => dispatch(getPublicEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Public);
