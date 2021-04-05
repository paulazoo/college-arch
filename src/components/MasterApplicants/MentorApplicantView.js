import React, { useState, useEffect } from 'react';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { Button, Grid, Typography, Card } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { getMentorApplicant } from '../../store/actions/api';

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

  return props.isMaster === true ? (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          {props.currentMentorApplicant && (
            <Grid container direction='row'>
              <Grid item xs={12}>
                <Typography className={classes.text}>
                  {`Viewing Mentor Applicant: ${props.currentMentorApplicant.id}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {`${props.currentMentorApplicant.first_name} ${props.currentMentorApplicant.last_name}`}
              </Grid>
            </Grid>
          )}
        </Card>
      </Grid>
    </>
  ) : (
    <Redirect to='/' />
  );
}

const mapStateToProps = (state) => ({
  currentMentorApplicant: state.mentor.currentMentorApplicant,
  isMaster: state.user.isMaster,
});

function mapDispatchToProps(dispatch) {
  return {
    getMentorApplicant: (id) => dispatch(getMentorApplicant(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MentorApplicantView);
