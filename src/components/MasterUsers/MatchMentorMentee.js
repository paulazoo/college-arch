import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  MenuItem,
  Select,
} from '@material-ui/core';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { postMatch } from '../../store/actions/api';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

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

function MatchMentorMentee({ mentees, mentors, ...props }) {
  const classes = useStyles();

  const [mentee, setMentee] = useState('');
  const [mentor, setMentor] = useState('');
  const [inputMenteeValue, setInputMenteeValue] = useState('');
  const [inputMentorValue, setInputMentorValue] = useState('');

  const handleMenteeChange = (event, newValue) => {
    console.log(newValue);
    setMentee(newValue);
  };

  const handleMentorChange = (event, newValue) => {
    setMentor(newValue);
  };

  const handleMatch = () => {
    props.postMatch({
      mentor_id: mentor.account.id,
      mentee_id: mentee.account.id,
    });
    setMentee('');
    setMentor('');
  };

  const handleInputMenteeChange = (event, newInputValue) => {
    setInputMenteeValue(newInputValue);
  };

  const handleInputMentorChange = (event, newInputValue) => {
    setInputMentorValue(newInputValue);
  };

  const filterOptions = createFilterOptions({
    // matchFrom: 'start',
    stringify: (option) => option.email,
    limit: 5,
  });

  const renderMatchMenuItem = (person) => {
    return (
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
            Match a Mentee with Mentor
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            WARNING: Mentees only have one mentor at a time.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{'Match Mentee '}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            fullWidth
            value={mentee}
            onChange={handleMenteeChange}
            inputValue={inputMenteeValue}
            onInputChange={handleInputMenteeChange}
            options={mentees} // TODO: only unmatched mentees
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
          <Autocomplete
            fullWidth
            value={mentor}
            onChange={handleMentorChange}
            inputValue={inputMentorValue}
            onInputChange={handleInputMentorChange}
            options={mentors}
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
                placeholder='Select Mentor'
                variant='outlined'
              />
            )}
          />
        </Grid>
        <Grid item>
          <Button color='secondary' variant='contained' onClick={handleMatch}>
            Match
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    postMatch: (body) => dispatch(postMatch(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMentorMentee);
