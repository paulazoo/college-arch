import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  MenuItem,
} from '@material-ui/core';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions/index';
import { postUnmatch } from '../../store/actions/api';

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
}));

function UnmatchMentorMentee({ menteesUsers, mentorsUsers, ...props }) {
  const classes = useStyles();

  const [menteeUser, setMenteeUser] = useState('');
  const [mentorUser, setMentorUser] = useState('');
  const [inputMenteeValue, setInputMenteeValue] = useState('');

  const handleMenteeChange = (event, newValue) => {
    if (newValue) {
      setMenteeUser(newValue);
      // Find respective matched mentor and set Mentor as well
      const mentee = props.mentees[newValue.account_id];
      const mentor = mentee.mentor;
      console.log(mentee);
      if (mentor) {
        setMentorUser(props.users[mentor.user.id]);
      }
    }
  };

  const handleUnmatch = () => {
    props.postUnmatch({
      mentor_id: mentorUser.account_id,
      mentee_id: menteeUser.account_id,
    });
    setMenteeUser('');
    setMentorUser('');
  };

  const handleInputMenteeChange = (event, newInputValue) => {
    setInputMenteeValue(newInputValue);
  };

  const filterOptions = createFilterOptions({
    // matchFrom: 'start',
    stringify: (option) => option.email,
    limit: 5,
  });

  const renderMatchMenuItem = (person) => {
    return (
      person && (
        <MenuItem value={person.account_id} key={person.id}>
          <Grid container direction='row' alignItems='center' spacing={1}>
            <Grid item>
              {person.image_url && (
                <img
                  style={{
                    height: '24px',
                    width: '24px',
                    display: 'block',
                    borderRadius: '50%',
                  }}
                  src={person.image_url}
                  alt='Profile picture'
                />
              )}
            </Grid>
            <Grid item>{person.email}</Grid>
            <Grid item xs={12}>
              {person.name && `(${person.name})`}
            </Grid>
          </Grid>
        </MenuItem>
      )
    );
  };

  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography className={classes.text}>
            Unmatch a Mentee with their Mentor
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{'Unmatch Mentee '}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            fullWidth
            value={menteeUser}
            onChange={handleMenteeChange}
            inputValue={inputMenteeValue}
            onInputChange={handleInputMenteeChange}
            options={menteesUsers} // TODO: only unmatched mentees
            filterOptions={filterOptions}
            // freeSolo
            getOptionLabel={(person) => person.email}
            renderOption={(option, { selected }) => (
              <>{renderMatchMenuItem(option)}</>
            )}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Select Mentee'
                variant='outlined'
              />
            )}
          />
        </Grid>
        <Grid item>
          <Typography>{' with Mentor '}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {mentorUser && `${mentorUser.email} (${mentorUser.name})`}
          </Typography>
        </Grid>
        <Grid item>
          <Button color='secondary' variant='contained' onClick={handleUnmatch}>
            Unmatch
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  account: state.account.account,
  users: state.master.users,
  mentees: state.master.mentees,
  mentors: state.master.mentors,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    postUnmatch: (body) => dispatch(postUnmatch(body)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnmatchMentorMentee);
