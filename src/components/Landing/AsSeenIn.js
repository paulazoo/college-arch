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

function AsSeenIn(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.common.asSeenIn}>
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={8}>
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='center'
            spacing={props.onMobile ? 1 : 3}
          >
            <Grid item xs={12} className={classes.headTextContainer}>
              <Typography className={classes.headText}>AS SEEN IN</Typography>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.civilbeat.org/2020/06/we-must-reimagine-college-guidance-programs/?fbclid=IwAR2Tad_5RBylBf9U99mrej4n4G5f2-EfiZzlHLlFu_R3DIWk4XVrKD7PvJE'
                >
                  <img
                    alt='HonoluluCivilBeat'
                    className={classes.logoImg}
                    src={require('../../assets/AsSeenIn/HonoluluCivilBeat.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='http://casarevista.com/5192/news/we-must-refocus-on-college-guidance-programs/?fbclid=IwAR2lOx_uw8UuV-OtNS58TbNh4jcsY4I-oTithRW0i1o41rRejIPukDyX7W0'
                >
                  <img
                    alt='TheCasaRevista'
                    className={classes.logoImg}
                    src={require('../../assets/AsSeenIn/TheCasaRevista.PNG')}
                  />
                </a>
              </div>
            </Grid>
            <Grid item className={classes.logoItem}>
              <div class='logo-image'>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.stanforddaily.com/2020/07/17/stanford-undergraduates-help-run-free-summer-f[…]lp-underrepresented-rising-seniors-with-college-admission/'
                >
                  <img
                    alt='TheStanfordDaily'
                    className={classes.logoImg}
                    src={require('../../assets/AsSeenIn/StanfordDaily.png')}
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

export default connect(mapStateToProps, mapDispatchToProps)(AsSeenIn);
