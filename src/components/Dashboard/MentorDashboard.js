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
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import ProfileCard from '../ProfilePic/ProfileCard';

// Custom Components

const useStyles = makeStyles((theme) => ({
  dashboard: {
    display: 'flex',
  },
  classroom: {
    width: '100%',
    padding: theme.spacing(1),
    display: 'flex',
  },
  cardsIntro: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function MentorDashboard(props) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.cardsIntro}>Your Mentees:</Typography>
      <Grid container direction='row' spacing={1} className={classes.dashboard}>
        {props.account.mentees &&
          props.account.mentees.map((mentee) => (
            <>
              <Grid item sm={10} key={mentee.id}>
                <ProfileCard user={mentee.user} />
              </Grid>
              <Grid item sm={2} style={{ display: 'flex' }}>
                <Card className={classes.classroom}>
                  <Grid
                    container
                    direction='row'
                    alignItems='center'
                    justify='center'
                  >
                    <Grid item>
                      {/* <Button variant='contained' color='secondary'>
                        Mentee's Google Classroom
                      </Button> */}
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </>
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(MentorDashboard);
