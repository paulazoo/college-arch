import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardActionArea,
  Grid,
  IconButton,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import moment from 'moment';

// Redux

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';
import EventPopup from './EventPopup';

const useStyles = makeStyles((theme) => ({
  eventCard: {
    width: '100%',
    position: 'relative',
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 22,
    padding: '5px !important',
  },
  cardTime: {
    fontSize: 20,
    fontWeight: 'light',
    color: theme.palette.common.gray,
    margin: 0,
    padding: '5px !important',
    paddingRight: '15px !important',
  },
  desc: {
    padding: theme.spacing(4),
    paddingTop: 0,
    // width: 300,
  },
  descContainer: {
    wordBreak: 'break-word',
  },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  infoButton: {
    width: 32,
    height: 32,
  },
}));

function SkinnyEventCard({ event, ...props }) {
  const classes = useStyles();

  const [popupOpen, setPopupOpen] = useState(false);

  const handleEventCardClick = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <EventPopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        event={event}
      />
      <Card className={classes.eventCard}>
        <CardActionArea
          className={classes.eventActionArea}
          onClick={handleEventCardClick}
        >
          <CardHeader
            title={(
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='flex-start'
                spacing={5}
              >
                <Grid item className={classes.cardTitle}>
                  <IconButton onClick={handleEventCardClick}>
                    <InfoIcon className={classes.infoButton} />
                  </IconButton>
                  <strong className={classes.nameText}>
                    {`${event.name} `}
                  </strong>
                </Grid>
                <Grid item className={classes.cardTime}>
                  {event.start_time !== null ? (
                    <>
                      {`${moment(event.start_time).format('lll')} to ${moment(
                        event.end_time
                      ).format('LT')}`}
                    </>
                  ) : (
                    <>Always open.</>
                  )}
                </Grid>
                <Grid item>
                  <EventButton
                    className={classes.actions}
                    link={event.link}
                    showJoin
                  />
                </Grid>
              </Grid>
            )}
          />
        </CardActionArea>
      </Card>
    </>
  );
}

export default SkinnyEventCard;
