/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';
import './Logos.css';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  headTextContainer: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  logoImg: {
    width: 128,
    height: 128,
    [theme.breakpoints.down('sm')]: {
      width: 64,
      height: 64,
    },
  },
  logoItem: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: `5px !important`,
    },
  },
}));

function Sponsors(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.common.sponsors}>
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={12} md={8}>
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='center'
            spacing={props.onMobile ? 1 : 4}
          >
            <Grid item xs={12} className={classes.headTextContainer}>
              <Typography className={classes.headText}>SPONSORS</Typography>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.thehersheycompany.com/en_us/sustainability/the-heartwarming-project.html'
                >
                  <img
                    alt="Hershey's Heartwarming Project"
                    className={classes.logoImg}
                    src={require('../../assets/Sponsors/HersheysHeartwarmingProject.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://store.thecoop.com/'
                >
                  <img
                    alt='The Harvard COOP'
                    className={classes.logoImg}
                    src={require('../../assets/Sponsors/TheHarvardCoop.jpg')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.wholefoodsmarket.com/'
                >
                  <img
                    alt='Whole Foods'
                    className={classes.logoImg}
                    src={require('../../assets/Sponsors/WholeFoods.png')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  onMobile: state.home.onMobile,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors);
