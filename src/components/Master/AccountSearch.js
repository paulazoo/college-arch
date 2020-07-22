import React, { useState, useEffect } from 'react';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import {
  InputAdornment,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Redux
import { connect } from 'react-redux';

// Theme
import { theme } from '../../theme.js';
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function AccountSearch({
  options,
  allOptions = [],
  selected,
  setSelected,
  setMentorResults,
  setMenteeResults,
  ...props
}) {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, newValue) => {
    setSelected(newValue);
    const preMentors = [];
    const preMentees = [];
    let user = {};
    if (newValue !== null && newValue.user_type === 'Mentor') {
      preMentors.push(newValue);
      setMentorResults(preMentors);

      user = props.mentors[newValue.user_id];
      if (user.mentees) {
        user.mentees.forEach((m) => {
          preMentees.push(m.account);
        });
      }

      setMenteeResults(preMentees);
    } else if (newValue !== null && newValue.user_type === 'Mentee') {
      preMentees.push(newValue);
      setMenteeResults(preMentees);

      user = props.mentees[newValue.user_id];
      if (user.mentor) {
        preMentors.push(user.mentor.account);
      }

      setMentorResults(preMentors);
      console.log(preMentees);
    } else if (newValue === null) {
      setMentorResults(allOptions.filter((p) => p.user_type === 'Mentor'));
      setMenteeResults(allOptions.filter((p) => p.user_type === 'Mentee'));
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const filterOptions = createFilterOptions({
    // matchFrom: 'start',
    stringify: (option) => option.email,
    limit: 5,
  });

  const renderMatchMenuItem = (person) => {
    return (
      <MenuItem value={person.user_id} key={person.id}>
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
      <Grid container spacing={1} alignItems='center' justify='flex-start'>
        <Grid item xs={12}>
          <Typography className={classes.text}>All Accounts</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Searching for a mentor or mentee will show both them and their
            respective mentees/mentor.
          </Typography>
        </Grid>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            fullWidth
            value={selected}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={options}
            filterOptions={filterOptions}
            // freeSolo
            getOptionLabel={(option) => option.email}
            renderOption={(option, { selected }) => (
              <>{renderMatchMenuItem(option)}</>
            )}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Search by email'
                variant='outlined'
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  accounts: state.master.accounts,
  mentors: state.master.mentors,
  mentees: state.master.mentees,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSearch);
