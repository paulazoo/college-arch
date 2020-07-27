import React, { useState } from 'react';
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
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';
import PublicEventButton from './PublicEventButton';
import PublicRegisterPopup from './PublicRegisterPopup';

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
}));

function EventPopup({
  event,
  popupOpen,
  setPopupOpen,
  name,
  handlePublicRegisterPopup,
  ...props
}) {
  const classes = useStyles();

  const handleCloseEventPopup = () => {
    setPopupOpen(false);
  };

  const renderEventKind = (kind) => {
    if (kind === 'open') {
      return <Typography className={classes.cardKind}>Public Event</Typography>;
    }
    if (kind === 'invite-only') {
      return (
        <Typography className={classes.cardKind}>Private Event</Typography>
      );
    }
  };

  const renderEventButton = (name) => {
    if (name === 'public') {
      return (
        <PublicEventButton
          fullLink
          eventId={event.id}
          link={event.link}
          showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
          showRegister={moment().isBefore(moment(event.end_time))}
          handleCloseEventPopup={handleCloseEventPopup}
          handlePublicRegisterPopup={handlePublicRegisterPopup}
        />
      );
    }
    return (
      <EventButton
        fullLink
        eventId={event.id}
        link={event.link}
        showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
        showRegister={moment().isBefore(moment(event.end_time))}
        accountRegistration={event.account_registration}
      />
    );
  };

  return (
    <Dialog
      open={popupOpen}
      onClose={handleCloseEventPopup}
      className={classes.eventDialog}
    >
      <Card className={classes.eventCard}>
        <CardHeader
          title={
            <div className={classes.cardTitle}>
              <strong className={classes.nameText}>{`${event.name} `}</strong>
            </div>
          }
          subheader={
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
          }
        />
        <CardContent>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography className={classes.cardHost}>
                {event.host && `Hosted by: ${event.host}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {renderEventKind(event.kind)}
            </Grid>
            <Grid item xs={12} className={classes.descContainer}>
              <Typography className={classes.cardDesc}>
                {event.description && event.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.cardDesc}>
                Link to join will show up 24 hours before event begins.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {renderEventButton(name)}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button onClick={handleCloseEventPopup}>Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}

export default EventPopup;
