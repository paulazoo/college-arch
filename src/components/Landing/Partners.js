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

function Partners(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.common.lightGray}>
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
              <Typography className={classes.headText}>PARTNERS</Typography>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.collegeessayguy.com/'
                >
                  <img
                    alt='College Essay Guy'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/CollegeEssayGuy.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.dearasianyouth.org/home/'
                >
                  <img
                    alt='Dear Asian Youth'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/DearAsianYouth.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://destineddoctors.wixsite.com/website'
                >
                  <img
                    alt='Destined Doctors'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/DestinedDoctors.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://socratespost.com/'
                >
                  <img
                    alt='Socrates Post'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/SocratesPost.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://wrafoundation.org/'
                >
                  <img
                    alt='We Rise Above'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/WeRiseAbove.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.wonsulting.com/'
                >
                  <img
                    alt='Wonsulting'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/Wonsulting.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.ymcahonolulu.org/'
                >
                  <img
                    alt='YMCA Honolulu'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/YMCAHonolulu.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://girlgeniusmag.tech/'
                >
                  <img
                    alt='Girl Genius Magazine'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/GirlGeniusMagazine.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.girltechboss.com/'
                >
                  <img
                    alt='Girl Tech Boss'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/GirlTechBoss.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.instagram.com/pathways_to_college2021/'
                >
                  <img
                    alt='Pathways to College'
                    className={classes.logoImg}
                    src={require('../../assets/Partners/PathwaystoCollege.png')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
