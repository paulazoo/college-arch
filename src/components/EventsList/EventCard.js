import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  IconButton,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { deleteEventApi } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';
import EventPopup from './EventPopup';
import PublicEventButton from '../PublicEvents/PublicEventButton';
import PublicPopup from '../PublicEvents/PublicPopup';
import EditEvent from '../CreateEvent/EditEvent';

const noImageFound = require('../../assets/no-image-found.png');

const useStyles = makeStyles((theme) => ({
  eventCard: {
    width: theme.spacing(37),
    height: theme.spacing(47),
    position: 'relative',
    // [theme.breakpoints.down('sm')]: {
    //   width: theme.spacing(20),
    //   height: theme.spacing(30),
    // },
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  nameText: {
    fontSize: 20,
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 12,
    // },
  },
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: '0 !important',
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
    margin: 0,
    paddingBottom: `${theme.spacing(1)} !important`,
    textAlign: 'center',
  },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  infoButton: {
    padding: '0 !important',
    height: 29,
    width: 29,
    // [theme.breakpoints.down('sm')]: {
    //   height: 20,
    //   width: 20,
    // },
  },
  infoIcon: {
    height: 29,
    width: 29,
    // [theme.breakpoints.down('sm')]: {
    //   height: 20,
    //   width: 20,
    // },
  },
  subheader: {
    // [theme.breakpoints.down('sm')]: {
    //   fontSize: 10,
    // },
  },
}));

function EventCard({ event, name, ...props }) {
  const classes = useStyles();

  const [popupOpen, setPopupOpen] = useState(false);
  const [publicPopupOpen, setPublicPopupOpen] = useState(false);
  const [publicPopupType, setPublicPopupType] = useState('register');
  const [editEventOpen, setEditEventOpen] = useState(false);

  const handleEventCardClick = () => {
    setPopupOpen(true);
  };

  // const handleEditEvent = () => {
  //   setPopupOpen(true);
  // };

  const handleDeleteEvent = () => {
    props.deleteEventApi(event.id);
  };

  const renderEventType = (type) => {
    if (type === 'open') {
      return <>{' (Public)'}</>;
    }
    if (type === 'fellows_only') {
      return <>{' (Fellows Only)'}</>;
    }
    if (type === 'invite_only') {
      return <>{' (Invite Required)'}</>;
    }
  };

  const handlePublicPopup = (type) => {
    setPopupOpen(false);
    setPublicPopupType(type);
    console.log(type);
    setPublicPopupOpen(true);
  };

  const handleEditEventOpen = () => {
    setEditEventOpen(true);
  };

  const renderEventButton = (name) => {
    if (
      name === 'public' &&
      !sessionStorage.getItem('access_token') &&
      !props.account?.id
    ) {
      return (
        <PublicEventButton
          eventId={event.id}
          publicLink={event.public_link}
          showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
          showRegister={moment().isBefore(moment(event.end_time))}
          handlePublicPopup={handlePublicPopup}
        />
      );
    }
    return (
      <EventButton
        eventId={event.id}
        link={event.link}
        showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
        showRegister={moment().isBefore(moment(event.end_time))}
        accountRegistration={event.account_registration}
      />
    );
  };

  const renderEditEvent = () => {
    if (name === 'all') {
      return (
        <EditEvent
          event={event}
          editEventOpen={editEventOpen}
          setEditEventOpen={setEditEventOpen}
        />
      );
    }
    return null;
  };

  const renderMasterButtons = () => {
    if (name === 'all') {
      return (
        <Grid container direction='column'>
          <Grid item>
            <IconButton
              onClick={handleEditEventOpen}
              className={classes.infoButton}
            >
              <EditIcon className={classes.infoIcon} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={handleDeleteEvent}
              className={classes.infoButton}
            >
              <DeleteIcon className={classes.infoIcon} />
            </IconButton>
          </Grid>
        </Grid>
      );
    }
    return null;
  };

  const renderEventName = () => {
    if (name === 'all') {
      return <>{`${event.name} ID: ${event.id.toString()}`}</>;
    }
    return <>{`${event.name} `}</>;
  };

  return (
    <>
      {renderEditEvent()}
      <EventPopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        event={event}
        name={name}
        handlePublicPopup={handlePublicPopup}
      />
      <PublicPopup
        type={publicPopupType}
        publicPopupOpen={publicPopupOpen}
        setPublicPopup={setPublicPopupOpen}
        event={event}
      />
      <Card className={classes.eventCard}>
        <CardHeader
          title={(
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='space-between'
              spacing={0}
            >
              <Grid item xs={1}>
                <IconButton
                  onClick={handleEventCardClick}
                  className={classes.infoButton}
                >
                  <InfoIcon className={classes.infoIcon} />
                </IconButton>
              </Grid>
              <Grid item xs={10} className={classes.cardTitle}>
                <strong className={classes.nameText}>
                  {renderEventName()}
                </strong>
              </Grid>
              <Grid item xs={1}>
                {renderMasterButtons()}
              </Grid>
            </Grid>
          )}
          subheader={(
            <div className={classes.subheader}>
              {event.start_time !== null ? (
                <>
                  {`${moment(event.start_time).format('lll')} to ${moment(
                    event.end_time
                  ).format('LT')}`}
                </>
              ) : (
                <>Always open.</>
              )}
              {renderEventType(event.kind)}
              <Grid container direction='row' justify='center' spacing={1}>
                <Grid item>{renderEventButton(name)}</Grid>
              </Grid>
            </div>
          )}
        />
        {event.image_url ? (
          <CardMedia className={classes.media} image={`${event.image_url}`} />
        ) : (
          <CardMedia className={classes.media} image={noImageFound} />
        )}
      </Card>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteEventApi: (eventId) => dispatch(deleteEventApi(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
