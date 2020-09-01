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
import { makeStyles, useTheme } from '@material-ui/styles';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import LoggedOutNavbar from './LoggedOutNavbar';
import LoggedInNavbar from './LoggedInNavbar';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

function DesktopNavbar({ ...props }) {
  const classes = useStyles();
  const history = useHistory();

  const theme = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.common.white;
  }, []);

  return (
    <>
      <PersonalSnackbar />
      {sessionStorage.getItem('access_token') && props.account.id ? (
        <LoggedInNavbar />
      ) : (
        <LoggedOutNavbar />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account.account,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavbar);
