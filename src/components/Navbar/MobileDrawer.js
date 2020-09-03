import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Link, Grid, Divider, List, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MuiAppBar from '@material-ui/core/AppBar';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  useHistory,
} from 'react-router-dom';
import DonateSvg from '../../assets/Icons/Donate.svg';
import MasterSvg from '../../assets/Icons/Master.svg';
import LoggedInSvg from '../../assets/Icons/LoggedIn.svg';
import LoggedOutSvg from '../../assets/Icons/LoggedOut.svg';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions';

// Theme

// Custom Components

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: theme.palette.primary.main,
  },
  title: {
    fontSize: 12,
    color: theme.palette.common.white,
  },
}));

function MobileDrawer({ menuItems, ...props }) {
  const classes = useStyles();

  const history = useHistory();

  const [state, setState] = useState({
    left: false,
  });

  const anchor = 'left';

  const handleLogout = () => {
    props.userLogout();
    history.push('/');
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logoClick = () => {
    history.push('/');
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {sessionStorage.getItem('access_token') &&
          props.account &&
          props.isMaster === true && (
            <Button
              color='inherit'
              component={NavLink}
              to='/master'
              key='Master'
            >
              <ListItem button key='Master'>
                <ListItemIcon style={{ color: 'white' }}>
                  {MasterSvg}
                </ListItemIcon>
                <ListItemText style={{ color: 'white' }} primary='Master' />
              </ListItem>
            </Button>
          )}
        {menuItems.map((item, index) => (
          <Button
            color='inherit'
            component={NavLink}
            to={item.link}
            key={item.text}
          >
            <ListItem button key={item.text}>
              <ListItemIcon style={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText style={{ color: 'white' }} primary={item.text} />
            </ListItem>
          </Button>
        ))}
        <Button
          color='inherit'
          target='_blank'
          key='Donate'
          href='https://www.gofundme.com/f/the-college-key'
        >
          <ListItem button key='Donate'>
            <ListItemIcon style={{ color: 'white' }}>{DonateSvg}</ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary='Donate' />
          </ListItem>
        </Button>
        {sessionStorage.getItem('access_token') ? (
          <Button
            color='inherit'
            className={classes.rightLink}
            onClick={handleLogout}
            key='Logout'
          >
            <ListItem button key='Logout'>
              <ListItemIcon style={{ color: 'white' }}>
                {LoggedInSvg}
              </ListItemIcon>
              <ListItemText style={{ color: 'white' }} primary='Logout' />
            </ListItem>
          </Button>
        ) : (
          <Button color='inherit' component={NavLink} to='/login' key='Login'>
            <ListItem button key='Login'>
              <ListItemIcon style={{ color: 'white' }}>
                {LoggedOutSvg}
              </ListItemIcon>
              <ListItemText style={{ color: 'white' }} primary='Login' />
            </ListItem>
          </Button>
        )}
      </List>
    </div>
  );

  return (
    <div>
      <MuiAppBar
        elevation={0}
        position='static'
        color='primary'
        style={{ height: 60 }}
      >
        <Grid
          container
          direction='row'
          alignItems='center'
          // justify="center"
          spacing={1}
        >
          <Grid item>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Button onClick={logoClick}>
              <img
                src={require('../../assets/Logos/CollegeArchLogoVector.svg')}
                alt='fancy favicon :D'
                width='48'
                height='48'
              />
            </Button>
          </Grid>
          <Grid item>
            <Link
              underline='none'
              className={classes.title}
              component={NavLink}
              to='/'
            >
              <Typography>College ARCH</Typography>
            </Link>
          </Grid>
        </Grid>
      </MuiAppBar>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
  isMaster: state.account.isMaster,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileDrawer);
