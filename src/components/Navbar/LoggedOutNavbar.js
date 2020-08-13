import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  IconButton,
  Button,
  Grid,
  Tooltip,
  Link,
  Toolbar,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';

// Theme

import { makeStyles } from '@material-ui/styles';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import { userLogout } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  logInOut: {
    fontSize: 16,
    color: theme.palette.secondary.light,
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    height: theme.spacing(15),
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  lastItem: {
    padding: 0,
    paddingRight: '10px !important',
  },
}));

function LoggedOutNavbar({ ...props }) {
  const classes = useStyles();
  const history = useHistory();

  const logoClick = () => {
    history.push('/');
  };

  return (
    <MuiAppBar elevation={0} position='static' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Grid item xs={4} md={5}>
            <Grid
              container
              direction='row'
              alignItems='center'
              // justify="center"
              spacing={1}
            >
              <Grid item>
                <img
                  src={require('../../assets/Logos/OrangeTempNavbar.jpg')}
                  alt='fancy banner :D'
                  width='245'
                  height='66'
                  onClick={logoClick}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={8} md={7}>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'
            >
              <Grid item>
                <Tooltip title='Home'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    component={NavLink}
                    to='/'
                  >
                    Home
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='About Us'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    component={NavLink}
                    to='/about-us'
                  >
                    About Us
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Fellowship Program'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    component={NavLink}
                    to='/fellowship-program'
                  >
                    Fellowship Program
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Donate'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    target='_blank'
                    href='https://www.gofundme.com/f/the-college-key'
                  >
                    Donate
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Apply'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    component={NavLink}
                    to='/apply'
                  >
                    Apply
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item className={classes.lastItem}>
                <Tooltip title='Login'>
                  <Button
                    color='inherit'
                    className={classes.logInOut}
                    component={NavLink}
                    to='/login'
                  >
                    Login
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOutNavbar);
