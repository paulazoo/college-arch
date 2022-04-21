import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Grid, Typography, Card } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import {
  getMentorApplicant,
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

function MentorApplicantView(props) {
  const classes = useStyles();

  const history = useHistory();

  const { applicantId } = useParams();

  useEffect(() => {
    props.getMentorApplicant(applicantId);
  }, []);

  const acceptApplicant = () => {
    props.putApplicantStatus(
      'mentor',
      props.currentMentorApplicant.id,
      'accepted'
    );
  };

  const rejectApplicant = () => {
    props.putApplicantStatus(
      'mentor',
      props.currentMentorApplicant.id,
      'rejected'
    );
  };

  return props.isMaster === true ? (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          {props.currentMentorApplicant && (
            <Grid container direction='row' spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h2'>
                  {`Viewing Mentor Applicant: ${props.currentMentorApplicant.id}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h2'>
                  {`${props.currentMentorApplicant.first_name} ${props.currentMentorApplicant.family_name}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h4'>
                  <b>APPLICANT STATUS: </b>
                  <b>{props.currentMentorApplicant.applicant_status}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Email: </b>
                  {props.currentMentorApplicant.email}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Phone: </b>
                  {props.currentMenteeApplicant.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Location: </b>
                  {props.currentMentorApplicant.location}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>City: </b>
                  {props.currentMenteeApplicant.city}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>College: </b>
                  {props.currentMentorApplicant.school || 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Graduation Year : </b>
                  {props.currentMentorApplicant.grad_year || 'N/A'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Underrepresented Category: </b>
                </Typography>
                <Typography>
                  {props.currentMenteeApplicant.hispanic && `hispanic, `}
                  {props.currentMenteeApplicant.native && `native, `}
                  {props.currentMenteeApplicant.asian && `asian, `}
                  {props.currentMenteeApplicant.black && `black, `}
                  {props.currentMenteeApplicant.me_na &&
                    `middle eastern or north african, `}
                  {props.currentMenteeApplicant.pi && `pacific islander, `}
                  {props.currentMenteeApplicant.multiracial && `multiracial, `}
                  {props.currentMenteeApplicant.low_income && `low income, `}
                  {props.currentMenteeApplicant.first_gen && `first gen, `}
                  {props.currentMenteeApplicant.immigrant && `immigrant, `}
                  {props.currentMenteeApplicant.undoc && `u, `}
                  {props.currentMenteeApplicant.stem_girl && `girl in stem, `}
                  {props.currentMenteeApplicant.single_parent &&
                    `single parent, `}
                  {props.currentMenteeApplicant.disabled && `disabled, `}
                  {props.currentMenteeApplicant.lgbt && `lgbtq+, `}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Major:</b>
                </Typography>
                <Typography>
                  {props.currentMenteeApplicant.interests}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <b>Essay:</b>
                </Typography>
                <Typography>{props.currentMentorApplicant.essay}</Typography>
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
  currentMentorApplicant: state.master.currentMentorApplicant,
  isMaster: state.user.isMaster,
});

function mapDispatchToProps(dispatch) {
  return {
    getMentorApplicant: (id) => dispatch(getMentorApplicant(id)),
    putApplicantStatus: (type, id, status) =>
      dispatch(putApplicantStatus(type, id, status)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorApplicantView);
