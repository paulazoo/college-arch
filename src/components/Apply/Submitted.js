import React, { useState } from 'react';
import { Grid, Typography, Card } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Custom Components

const useStyles = makeStyles((theme) => ({
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
  main: {
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15vh',
    },
  },
}));

function Submitted(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
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
                  Thank you for applying! We will review your application and
                  get back to you by email :)
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Submitted;
