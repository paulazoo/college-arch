import React, { useState, useEffect } from 'react';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { Button, Grid, Typography, Card } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import {
  getMenteeApplicant,
  putApplicantStatus,
} from '../../store/actions/api';

// Custom Components

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    marginTop: 0,
    padding: theme.spacing(2),
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function MenteeApplicantView(props) {
  const classes = useStyles();

  const history = useHistory();

  const { applicantId } = useParams();

  useEffect(() => {
    props.getMenteeApplicant(applicantId);
  }, []);

  const acceptApplicant = () => {
    props.putApplicantStatus(
      'mentee',
      props.currentMenteeApplicant.id,
      'accepted'
    );
  };

  const rejectApplicant = () => {
    props.putApplicantStatus(
      'mentee',
      props.currentMenteeApplicant.id,
      'rejected'
    );
  };

  return props.isMaster === true ? (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          {props.currentMenteeApplicant && (
            <Grid container direction='row' spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h2'>
                  {`Viewing Mentee Applicant: ${props.currentMenteeApplicant.id}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h2'>
                  {`${props.currentMenteeApplicant.first_name} ${props.currentMenteeApplicant.family_name}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h4'>
                  <b>APPLICANT STATUS: </b>
                  <b>{props.currentMenteeApplicant.applicant_status}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Email: </b>
                  {props.currentMenteeApplicant.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Location: </b>
                  {props.currentMenteeApplicant.location}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>School: </b>
                  {props.currentMenteeApplicant.school || 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Graduation Year : </b>
                  {props.currentMenteeApplicant.grad_year || 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Essay:</b>
                </Typography>
                <Typography>{props.currentMenteeApplicant.essay}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={acceptApplicant}
                >
                  Accept
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant='contained' onClick={rejectApplicant}>
                  Reject
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => history.push('/master/applicants')}
                >
                  Back to Applicants List
                </Button>
              </Grid>
            </Grid>
          )}
        </Card>
      </Grid>
    </>
  ) : (
    <p>{applicantId}</p>
  );
}

const mapStateToProps = (state) => ({
  currentMenteeApplicant: state.master.currentMenteeApplicant,
  isMaster: state.user.isMaster,
});

function mapDispatchToProps(dispatch) {
  return {
    getMenteeApplicant: (id) => dispatch(getMenteeApplicant(id)),
    putApplicantStatus: (type, id, status) =>
      dispatch(putApplicantStatus(type, id, status)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenteeApplicantView);
