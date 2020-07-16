import React, { useState } from 'react';
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
import { userLogout, setUser } from '../../store/actions/index';
import Navbar from '../Navbar/Navbar';
import Footer from '../Landing/Footer';
import WordDivider from '../Shared/WordDivider';

// Custom Components

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
  applyCard: {
    margin: theme.spacing(8),
    marginTop: 0,
    padding: theme.spacing(8),
    height: '40vh',
  },
  applyTextContainer: {
    textAlign: 'center',
  },
  applyText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  applyButton: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  applyDivider: {
    margin: theme.spacing(4),
    height: '20vh',
  },
}));

function Apply(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Apply Here!
        </Typography>
      </WordDivider>

      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={8}>
          <Card className={classes.applyCard}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
            >
              <Grid item xs={12} className={classes.applyTextContainer}>
                <Typography className={classes.applyText}>
                  Apply to be a College Key Foundation Mentee or Mentor!
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.applyButton}
                >
                  Mentee
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
                  color='secondary'
                  className={classes.applyButton}
                >
                  Mentor
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
