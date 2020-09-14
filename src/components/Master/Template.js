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

// Custom Components
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

function Template(props) {
  const classes = useStyles();

  const [mentorEmailValue, setMentorEmailValue] = useState('');

  const handleMentorEmailValueChange = (e) => {
    setMentorEmailValue(e.target.value);
  };

  const handleNewMentor = () => {
    props.postNewsletterEmails({ email: mentorEmailValue });
    setMentorEmailValue('');
  };

  return (
    <>
      <Grid item xs={6}>
        <Typography className={classes.text}>
          Add a Mentor User with their email
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          variant='outlined'
          label="Mentor's Email"
          placeholder='mentorexample@gmail.com'
          value={mentorEmailValue}
          onChange={handleMentorEmailValueChange}
        />
      </Grid>
      <Grid item xs={2}>
        <Button color='secondary' variant='contained' onClick={handleNewMentor}>
          Add Mentor
        </Button>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);
