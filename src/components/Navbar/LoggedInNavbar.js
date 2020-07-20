import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
  IconButton,
  Button,
  Grid,
  Tooltip,
  Link,
  Toolbar,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/styles';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';

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
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    height: theme.spacing(15),
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
}));

function LoggedInNavbar({ ...props }) {
  const classes = useStyles();
  const history = useHistory();

  const logoClick = () => {
    history.push('/');
  };

  const handleLogout = () => {
    props.userLogout();
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
          <Grid item xs={3}>
            <Grid
              container
              direction='row'
              alignItems='center'
              // justify="center"
              spacing={1}
            >
              <Grid item>
                <img
                  src={require('../../assets/collegeKeyNavbarNew.JPG')}
                  alt='fancy banner :D'
                  width='275'
                  height='75'
                  onClick={logoClick}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid
              container
              direction='row'
              justify='flex-end'
              alignItems='center'
              spacing={10}
            >
              {(props.account.email === 'paulazhu@college.harvard.edu' ||
                props.account.email === 'collegekeyfoundation@gmail.com') && (
                <Grid item>
                  <Tooltip title='Secret Master Controller!'>
                    <Button
                      color='inherit'
                      className={classes.rightLink}
                      component={NavLink}
                      to='/master'
                    >
                      Master
                    </Button>
                  </Tooltip>
                </Grid>
              )}
              <Grid item>
                <Tooltip title='Dashboard'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    component={NavLink}
                    to='/dashboard'
                  >
                    Dashboard
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Profile'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    component={NavLink}
                    to='/profile'
                  >
                    Profile
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
                <Tooltip title='Logout'>
                  <Button
                    color='inherit'
                    className={classes.rightLink}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Tooltip>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInNavbar);
