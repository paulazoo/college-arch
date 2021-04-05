import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import {
  Button,
  Grid,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import {
  getMenteeApplicants,
  getMentorApplicants,
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

function AcceptedApplicants(props) {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    props.getMenteeApplicants();
    props.getMentorApplicants();
  }, []);

  return props.isMaster === true ? (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Typography className={classes.text}>
            Accepted Mentee Applicants:
          </Typography>
          <List>
            {props.menteeApplicants &&
              props.menteeApplicants.map(
                (applicant) =>
                  applicant.applicant_status === 'accepted' && (
                    <ListItem>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() =>
                          history.push(
                            `/master/mentee_applicant/${applicant.id}`
                          )}
                      >
                        {`ID: ${applicant.id} Email: ${applicant.email}`}
                      </Button>
                    </ListItem>
                  )
              )}
          </List>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Typography className={classes.text}>
            Accepted Mentor Applicants
          </Typography>
          <List>
            {props.mentorApplicants &&
              props.mentorApplicants.map(
                (applicant) =>
                  applicant.applicant_status === 'accepted' && (
                    <ListItem>
                      <Button
                        variant='contained'
                        color={
                          applicant.applicant_status === 'accepted'
                            ? 'secondary'
                            : 'primary'
                        }
                        onClick={() =>
                          history.push(
                            `/master/mentor_applicant/${applicant.id}`
                          )}
                      >
                        {`ID: ${applicant.id} Email: ${applicant.email}`}
                      </Button>
                    </ListItem>
                  )
              )}
          </List>
        </Card>
      </Grid>
    </>
  ) : (
    <Redirect to='/' />
  );
}

const mapStateToProps = (state) => ({
  menteeApplicants: state.master.menteeApplicants,
  mentorApplicants: state.master.mentorApplicants,
  isMaster: state.user.isMaster,
});

function mapDispatchToProps(dispatch) {
  return {
    getMenteeApplicants: () => dispatch(getMenteeApplicants()),
    getMentorApplicants: () => dispatch(getMentorApplicants()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptedApplicants);
