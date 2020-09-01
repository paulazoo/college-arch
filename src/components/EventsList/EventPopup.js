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
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';
import PublicEventButton from '../PublicEvents/PublicEventButton';

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
  handlePublicPopup,
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
    if (
      name === 'public' &&
      !sessionStorage.getItem('access_token') &&
      !props.account?.id
    ) {
      return (
        <PublicEventButton
          fullLink
          eventId={event.id}
          publicLink={event.public_link}
          showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
          showRegister={moment().isBefore(moment(event.end_time))}
          handleCloseEventPopup={handleCloseEventPopup}
          handlePublicPopup={handlePublicPopup}
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

  const renderEventName = () => {
    if (name === 'all') {
      return <>{`${event.name} ID: ${event.id.toString()}`}</>;
    }
    return <>{`${event.name} `}</>;
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
              <strong className={classes.nameText}>{renderEventName()}</strong>
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

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account.account,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(EventPopup);
