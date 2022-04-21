import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, Divider } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { getUsers, getMentors, getMentees } from '../../store/actions/api';

// Custom Components
import ImportMenteeMentor from '../GoogleSheets/ImportMenteeMentor';
import MatchMentorMentee from './MatchMentorMentee';
import AddUsers from './AddUsers';
import UserSearch from './UserSearch';
import ShowUsers from './ShowUsers';
import UnmatchMentorMentee from './UnmatchMentorMentee';

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

function MasterUsersContainer(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getUsers();
    props.getMentors();
    props.getMentees();
  }, []);

  const [allOptions, setAllOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [mentorResults, setMentorResults] = useState([]);
  const [menteeResults, setMenteeResults] = useState([]);

  // get attendee and room options for search
  useEffect(() => {
    setOptions(Object.values(props.users));
    setAllOptions(Object.values(props.users));

    setMentorResults(Object.values(props.mentors).map((m) => m.user));
    setMenteeResults(Object.values(props.mentees).map((m) => m.user));
  }, [props.users]);

  return (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <ImportMenteeMentor />
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card}>
          <AddUsers />
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card}>
          <MatchMentorMentee
            mentees={Object.values(props.users).filter(
              (p) => p.account_type === 'Mentee'
            )}
            mentors={Object.values(props.users).filter(
              (p) => p.account_type === 'Mentor'
            )}
          />
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card}>
          <UnmatchMentorMentee
            menteesUsers={Object.values(props.users).filter(
              (p) => p.account_type === 'Mentee'
            )}
            mentorsUsers={Object.values(props.users).filter(
              (p) => p.account_type === 'Mentor'
            )}
          />
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='center'
            spacing={3}
          >
            <Grid item xs={12}>
              <UserSearch
                options={options}
                allOptions={allOptions}
                selected={selected}
                setSelected={setSelected}
                setMentorResults={setMentorResults}
                setMenteeResults={setMenteeResults}
              />
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
              <Typography className={classes.text}>Mentors</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <ShowUsers people={mentorResults} />
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
              <Typography className={classes.text}>Mentees</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <ShowUsers people={menteeResults} />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
  users: state.master.users,
  mentors: state.master.mentors,
  mentees: state.master.mentees,
});

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
    getMentors: () => dispatch(getMentors()),
    getMentees: () => dispatch(getMentees()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterUsersContainer);
