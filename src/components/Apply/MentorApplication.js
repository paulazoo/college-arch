import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({}));

function MentorApplication(props) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('we');
  const [lastName, setLastName] = useState('');

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // TODO: eventually actually run the api call, but for now just console.log
    console.log('first name: ', firstName);
    console.log('last name: ', lastName);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: 50 }}>
        <Card>
          <Grid container direction='row'>
            <Grid item>
              <Typography>Mentor Application</Typography>
            </Grid>
          </Grid>
        </Card>
        <div style={{ height: 25 }} />
        <Card style={{ padding: 25 }}>
          <Grid
            container
            spacing={3}
            direction='row'
            justify='center'
            alignItems='center'
          >
            <Grid item xs={6}>
              <TextField
                id='firstName'
                value={firstName}
                onChange={handleChange}
                variant='outlined'
                fullWidth
                label='First Name'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={lastName}
                onChange={handleChange}
                id='lastName'
                variant='outlined'
                fullWidth
                label='Last Name'
              />
            </Grid>
            <Grid item xs={9}>
              <TextField fullWidth label='another textfield' />
            </Grid>
            <Grid item xs={3}>
              <TextField fullWidth label='Another another textifled' />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item>
                  <Button
                    onClick={handleSubmit}
                    color='primary'
                    variant='contained'
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorApplication);
