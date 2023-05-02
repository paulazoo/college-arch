import React, { useState } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

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

function AdmissionsOfficers(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.common.admissionsOfficers}>
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
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.civilbeat.org/2020/06/we-must-reimagine-college-guidance-programs/?fbclid=IwAR2Tad_5RBylBf9U99mrej4n4G5f2-EfiZzlHLlFu_R3DIWk4XVrKD7PvJE'
              >
                <img
                  alt='UH Manoa'
                  className={classes.logoImg}
                  src={require('../../assets/AdmissionsOfficers/HonoluluCivilBeat.png')}
                />
              </a>
            </Grid>
            <Grid item className={classes.logoItem}>
              <a
                rel='noreferrer'
                target='_blank'
                href='http://casarevista.com/5192/news/we-must-refocus-on-college-guidance-programs/?fbclid=IwAR2lOx_uw8UuV-OtNS58TbNh4jcsY4I-oTithRW0i1o41rRejIPukDyX7W0'
              >
                <img
                  alt='Hawaii Pacific University'
                  className={classes.logoImg}
                  src={require('../../assets/AdmissionsOfficers/TheCasaRevista.png')}
                />
              </a>
            </Grid>
            <Grid item className={classes.logoItem}>
              <a
                rel='noreferrer'
                target='_blank'
                href='http://casarevista.com/5192/news/we-must-refocus-on-college-guidance-programs/?fbclid=IwAR2lOx_uw8UuV-OtNS58TbNh4jcsY4I-oTithRW0i1o41rRejIPukDyX7W0'
              >
                <img
                  alt='University of Maryland'
                  className={classes.logoImg}
                  src={require('../../assets/AdmissionsOfficers/TheCasaRevista.png')}
                />
              </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdmissionsOfficers);
