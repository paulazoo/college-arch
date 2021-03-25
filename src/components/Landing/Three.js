import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  imgResponsive: {
    height: 'auto',
    width: 'auto',
    maxWidth: '250px',
    maxHeight: '250px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '125px',
      maxHeight: '125px',
    },
  },
  title: {
    width: '15rem',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      width: '6rem',
    },
  },
  textGrid: {
    textAlign: 'center',
  },
  text: {
    width: '15rem',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 7,
      width: '6rem',
    },
  },
  rightLink: {
    marginTop: '15px',
    fontSize: 16,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));

function Three(props) {
  const classes = useStyles();

  return (
    <Grid container direction='row' justify='space-between' spacing={0}>
      <Grid item xs={0} md={1} />
      <Grid item xs={3}>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={require('../../assets/Three/calGrad.PNG')}
              className={classes.imgResponsive}
              alt='weekly seminars'
            />
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.title}>WEEKLY SEMINARS</Typography>
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.text}>
              College ARCH's weekly seminars cover a multitude of subjects,
              including standardized testing led by a prominent author of
              Kaplan’s testing material to college apps, led by Admissions
              Officers from top universities and even financial aid and FAFSA.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={require('../../assets/Three/tableGrad.PNG')}
              className={classes.imgResponsive}
              alt='one-on-one mentorship'
            />
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.title}>
              ONE-ON-ONE MENTORSHIP
            </Typography>
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.text}>
              Our program matches rising high school seniors to college students
              of similar backgrounds. College mentors can help answer questions,
              proofread essays and applications, and personally guide mentees
              through the process.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={require('../../assets/Three/computerGrad.PNG')}
              className={classes.imgResponsive}
              alt='optional workshops'
            />
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.title}>
              OPTIONAL WORKSHOPS
            </Typography>
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.text}>
              Our optional workshops are designed to provide additional support
              in essay-writing, scholarship-searching, and local university
              admissions to those interested.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={12}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              className={classes.rightLink}
              component={NavLink}
              to='/fellowship-program'
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Three);
