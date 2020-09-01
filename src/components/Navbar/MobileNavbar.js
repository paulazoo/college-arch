import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
import EventIcon from '@material-ui/icons/Event';
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

// Redux
import { connect } from 'react-redux';

// Theme

import { makeStyles } from '@material-ui/styles';

// Custom Components
import MobileDrawer from './MobileDrawer';
import { loggedOutMenuItems, loggedInMenuItems } from './mobileMenuItems';

const useStyles = makeStyles((theme) => ({}));

function MobileNavbar({ ...props }) {
  const classes = useStyles();

  return (
    <div>
      {sessionStorage.getItem('access_token') ? (
        <MobileDrawer menuItems={loggedInMenuItems} />
      ) : (
        <MobileDrawer menuItems={loggedOutMenuItems} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar);
