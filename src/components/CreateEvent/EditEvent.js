import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Card,
  Button,
  CardHeader,
  Grid,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  Box,
  Dialog,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { putEvent } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../theme';

// Custom Components
import EventTime from './EventTime';
import ChipInput from '../Shared/ChipInput';

const useStyles = makeStyles((theme) => ({
  alignRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: 2,
  },
  dBlock: {
    display: 'block',
  },
  dNone: {
    display: 'none',
  },
  headText: {
    color: theme.palette.primary.dark,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  labelItem: {
    display: 'inline-flex',
    textAlign: 'center',
    verticalAlign: 'middle',
    justifyContent: 'flex-start',
  },
}));

function EditEvent({ event, editEventOpen, setEditEventOpen, ...props }) {
  const classes = useStyles();
  const [eventName, setEventName] = useState(event.name);
  const [eventHost, setEventHost] = useState(event.host);
  const [eventKind, setEventKind] = useState(event.kind);
  const [eventDescription, setEventDescription] = useState(event.description);
  const [eventImageUrl, setEventImageUrl] = useState(event.image_url);
  const [eventLink, setEventLink] = useState(event.link);
  const [eventPublicLink, setEventPublicLink] = useState(event.public_link);
  const [startTime, setStartTime] = useState(event.start_time);
  const [endTime, setEndTime] = useState(event.end_time);
  const [notPossible, setNotPossible] = useState(false);
  const [invited, setInvited] = useState([]);
  const [inputInvited, setInputInvited] = useState('');
  const inputs = [
    {
      value: eventName,
      label: 'Name',
      valueName: 'eventName',
      placeholder: 'Event Name',
      disabled: false,
    },
    {
      value: eventKind,
      label: 'Event Access',
      valueName: 'eventKind',
      options: ['Public', 'Fellows Only', 'Invite-Only'],
      optionValues: ['open', 'fellows_only', 'invite_only'],
    },
    {
      value: eventHost,
      label: 'Hosted by',
      valueName: 'eventHost',
      placeholder: 'Event Host',
      disabled: false,
    },
    {
      value: eventDescription,
      label: 'Description',
      valueName: 'eventDescription',
      placeholder: 'Description of Event',
      disabled: false,
    },
    {
      value: eventLink,
      label: 'Link',
      valueName: 'eventLink',
      placeholder: 'www.harvard.zoom.us/j/example',
      disabled: false,
    },
    {
      value: eventImageUrl,
      label: 'Image Url',
      valueName: 'eventImageUrl',
      placeholder: 'Event card image url',
      disabled: false,
    },
    {
      value: eventPublicLink,
      label: 'Public Link',
      valueName: 'eventPublicLink',
      placeholder: 'Link for public live streaming',
      disabled: false,
    },
  ];
  const [inviteesAddedPeople, setInviteesAddedPeople] = useState([]);

  useEffect(() => {
    // event times only if there are event times
    if (event.start_time === null || event.start_time === []) {
      setStartTime(null);
      setEndTime(null);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'eventName': {
        setEventName(value);
        break;
      }
      case 'eventHost': {
        setEventHost(value);
        break;
      }
      case 'eventKind': {
        setEventKind(value);
        break;
      }
      case 'eventDescription': {
        setEventDescription(value);
        break;
      }
      case 'eventLink': {
        setEventLink(value);
        break;
      }
      case 'eventImageUrl': {
        setEventImageUrl(value);
        break;
      }
      case 'eventPublicLink': {
        console.log(eventPublicLink);
        setEventPublicLink(value);
        break;
      }
      default:
        throw new Error('No branch selected in switch statement.');
    }
  };

  // adding invitees
  const handleInviteesAddPersonChip = (chip) => {
    const newAddedPeople = inviteesAddedPeople;
    newAddedPeople.push(chip);
    setInviteesAddedPeople(newAddedPeople);
  };

  const handleInviteesDeletePersonChip = (chip, index) => {
    const newAddedPeople = inviteesAddedPeople;
    newAddedPeople.splice(index, 1);
    setInviteesAddedPeople(newAddedPeople);
  };

  const onSubmit = () => {
    if (
      (endTime != null &&
        startTime != null &&
        moment(endTime) > moment(startTime)) ||
      (endTime === null && startTime === null)
    ) {
      setNotPossible(false);

      // Ruby on rails cant PUT null times
      let start_time = startTime;
      let end_time = endTime;
      if (startTime === null) {
        start_time = [];
        end_time = [];
      }

      props.putEvent(event.id, {
        start_time,
        end_time,
        name: eventName,
        host: eventHost,
        kind: eventKind,
        description: eventDescription,
        link: eventLink,
        image_url: eventImageUrl,
        public_link: eventPublicLink,
        invitees: inviteesAddedPeople,
      });

      console.log({
        start_time,
        end_time,
        name: eventName,
        host: eventHost,
        kind: eventKind,
        description: eventDescription,
        link: eventLink,
        image_url: eventImageUrl,
        public_link: eventPublicLink,
        invitees: inviteesAddedPeople,
      });

      setEditEventOpen(false);
    } else {
      setNotPossible(true);
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEditEventClose = () => {
    setEditEventOpen(false);
  };

  return (
    <Dialog open={editEventOpen} onClose={handleEditEventClose}>
      <CardContent style={{ padding: 60, paddingTop: 18, paddingBottom: 40 }}>
        <Grid container direction='row' spacing={3}>
          {inputs.map((element) =>
            element.label !== 'Event Access' ? (
              <React.Fragment key={element.label}>
                <Grid item xs={3} className={classes.labelItem}>
                  <Typography className={classes.headText}>
                    {element.label}
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  {element.label === 'Description' ? (
                    <TextField
                      variant='outlined'
                      disabled={element.disabled}
                      fullWidth
                      multiline
                      rows={4}
                      name={element.valueName}
                      value={element.value}
                      onChange={handleChange}
                      placeholder={element.placeholder}
                    />
                  ) : (
                    <TextField
                      variant='outlined'
                      disabled={element.disabled}
                      fullWidth
                      name={element.valueName}
                      value={element.value}
                      onChange={handleChange}
                      placeholder={element.placeholder}
                    />
                  )}
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment key={element.label}>
                <Grid item xs={3} className={classes.labelItem}>
                  <Typography className={classes.headText}>
                    {inputs[1].label}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Select
                    value={inputs[1].value}
                    name={inputs[1].valueName}
                    onChange={handleChange}
                    variant='outlined'
                    fullWidth
                    MenuProps={{
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                    }}
                  >
                    {inputs[1].options.map((innerElement, i) => (
                      <MenuItem
                        value={inputs[1].optionValues[i]}
                        key={innerElement}
                      >
                        {innerElement}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={5} />
              </React.Fragment>
            )
          )}

          <Grid item xs={12}>
            <Grid container direction='row' spacing={3}>
              {eventKind === 'invite_only' && (
                <>
                  <Grid item xs={3} className={classes.labelItem}>
                    <Typography className={classes.headText}>
                      Invited People:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <ChipInput
                      onAdd={(chip) => handleInviteesAddPersonChip(chip)}
                      onDelete={(chip, index) =>
                        handleInviteesDeletePersonChip(chip, index)}
                      onBeforeAdd={(chip) => validateEmail(chip)}
                      value={inviteesAddedPeople}
                      fullWidth
                      variant='outlined'
                      placeholder='Type ENTER after each email to enter'
                    />
                  </Grid>
                </>
              )}
              {eventKind === 'public' && (
                <>
                  <Grid item xs={3} className={classes.labelItem}>
                    <Typography className={classes.headText}>
                      Public Link:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      variant='outlined'
                      fullWidth
                      name='eventPublicLink'
                      value={eventPublicLink}
                      onChange={handleChange}
                      placeholder='Live streaming link for the public'
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={3} className={classes.labelItem}>
                <Typography className={classes.headText}>Event Time</Typography>
              </Grid>
              <Grid item xs={9}>
                <EventTime
                  startTime={startTime}
                  endTime={endTime}
                  setStartTime={setStartTime}
                  setEndTime={setEndTime}
                />
                {notPossible && (
                  <Typography>
                    Not saved. Event end time must be after start time.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction='row' justify='space-between'>
              <Grid item>
                <Button variant='contained' onClick={handleEditEventClose}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={onSubmit}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    putEvent: (eventId, body) => dispatch(putEvent(eventId, body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
