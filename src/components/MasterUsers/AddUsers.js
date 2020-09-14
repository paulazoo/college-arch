import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { postMentors, postMentees } from '../../store/actions/api';

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

function AddUsers(props) {
  const classes = useStyles();

  const [mentorEmailValue, setMentorEmailValue] = useState('');
  const [menteeEmailValue, setMenteeEmailValue] = useState('');

  const handleMentorEmailValueChange = (e) => {
    setMentorEmailValue(e.target.value);
  };

  const handleMenteeEmailValueChange = (e) => {
    setMenteeEmailValue(e.target.value);
  };

  const handleNewMentor = () => {
    props.postMentors({ email: mentorEmailValue });
    setMentorEmailValue('');
  };

  const handleNewMentee = () => {
    props.postMentees({ email: menteeEmailValue });
    setMenteeEmailValue('');
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
        <Grid item xs={6}>
          <Typography className={classes.text}>
            Add an accepted Mentor User with their email
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.text}>
            Add an accepted Mentee User with their email
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant='outlined'
            label="Mentor's Email (Must be gmail)"
            placeholder='mentorexample@gmail.com'
            value={mentorEmailValue}
            onChange={handleMentorEmailValueChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            color='secondary'
            variant='contained'
            onClick={handleNewMentor}
          >
            Add Mentor
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant='outlined'
            label="Mentee's Email (Must be gmail)"
            placeholder='menteeexample@gmail.com'
            value={menteeEmailValue}
            onChange={handleMenteeEmailValueChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            color='secondary'
            variant='contained'
            onClick={handleNewMentee}
          >
            Add Mentee
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
    postMentors: (body) => dispatch(postMentors(body)),
    postMentees: (body) => dispatch(postMentees(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
