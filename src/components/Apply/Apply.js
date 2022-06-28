import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  Divider,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WordDivider from '../Shared/WordDivider';

// Custom Components

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  card: {
    margin: theme.spacing(8),
    marginTop: 0,
    padding: theme.spacing(8),
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      margin: theme.spacing(1),
      marginTop: '15vh',
    },
  },
  applyTextContainer: {
    textAlign: 'center',
  },
  applyText: {
    fontWeight: 'bold',
    fontSize: 28,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  applyButton: {
    fontWeight: 'bold',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
  applyDivider: {
    margin: theme.spacing(4),
    height: '20vh',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1),
    },
  },
  dueDate: {
    fontWeight: 'bold',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  main: {
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15vh',
    },
  },
}));

function Apply(props) {
  const classes = useStyles();

  const history = useHistory();

  const goToMentorApplication = () => {
    history.push('/apply/mentor');
  };

  const goToMenteeApplication = () => {
    history.push('/apply/mentee');
  };

  return (
    <>
      <Navbar />
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Apply Here!
        </Typography>
      </WordDivider>

      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        className={classes.main}
      >
        <Grid item xs={12} md={8}>
          <Card className={classes.card}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
            >
              <Grid item xs={12} className={classes.applyTextContainer}>
                <Typography className={classes.applyText}>
                  Apply to be a College ARCH Fellow or Mentor!
                </Typography>
                <Typography className={classes.dueDate}>
                  Fellowship applications will be due July 3, 2022 (extended)
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.applyButton}
                  onClick={goToMenteeApplication}
                  //disabled
                >
                  Fellow
                </Button>
              </Grid>
              <Divider
                orientation='vertical'
                flexItem
                className={classes.applyDivider}
              />
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.applyButton}
                  onClick={goToMentorApplication}
                  //disabled
                >
                  Mentor
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
