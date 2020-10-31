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

// Icons
import FeedbackIcon from '@material-ui/icons/Feedback';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SubjectIcon from '@material-ui/icons/Subject';

import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import TocIcon from '@material-ui/icons/Toc';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ReceiptIcon from '@material-ui/icons/Receipt';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import ListAltIcon from '@material-ui/icons/ListAlt';

// Redux
import { connect } from 'react-redux';
import { setOnMobile } from '../../store/actions/index';

// Theme

import { makeStyles } from '@material-ui/styles';

// Custom Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: 'white',
  },
}));

function NavBar({ ...props }) {
  const classes = useStyles();
  const currentHideNav = window.innerWidth <= 770;

  useEffect(() => {
    document.body.style.backgroundColor = props.backgroundColor;
  }, []);

  const resize = () => {
    const currentHideNav = window.innerWidth <= 770;
    if (currentHideNav !== props.onMobile) {
      props.setOnMobile(currentHideNav);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
  }, [window.innerWidth]);

  useEffect(() => {
    console.log(props.onMobile, ' change detected');
  }, [props.onMobile]);

  return <>{currentHideNav ? <MobileNavbar /> : <DesktopNavbar />}</>;
}

const mapStateToProps = (state) => ({
  onMobile: state.home.onMobile,
});

const mapDispatchToProps = (dispatch) => ({
  setOnMobile: (onMobile) => dispatch(setOnMobile(onMobile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
