import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// Theme
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';

// Custom Components
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Testing from './components/Testing/Testing';
import FellowshipProgram from './components/FellowshipProgram/FellowshipProgram';
import LoginPage from './components/LoginPage/LoginPage';
import MenteesPage from './components/MenteesPage/MenteesPage';
import MentorsPage from './components/MentorsPage/MentorsPage';
import Terms from './components/Terms/Terms';
import Apply from './components/Apply/Apply';
import Dashboard from './components/Dashboard/Dashboard';
import Master from './components/Master/Master';
import Profile from './components/Profile/Profile';
import PublicEvents from './components/PublicEvents/PublicEvents';
import EventPage from './components/EventPage/EventPage';
import { userLogout } from './store/actions';
import Isabela from './components/Testing/Isabela';

function App(props) {
  const createdTheme = createMuiTheme({
    palette: {
      primary: {
        light: '#FFB347',
        main: '#FF971A',
        dark: '#CE8217',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#30C3CD',
        main: '#1697B7',
        contrastText: '#FFFFFF',
      },
      contrastText: '#fff',
      warning: {
        light: '#FF6961',
        main: '#DC453D',
        dark: '#C33C23',
      },
      common: {
        navbar: '#CE8217',
        white: 'white',
        black: 'black',
        gray: 'gray',
        yellow: '#ffde59',
        muted: '#84c6c8',
        teamOne: '#93E3B6',
        teamTwo: '#92E1E4',
        lightGray: 'lightgray',
        greenFoam: '#B4D2D4',
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: 'Work Sans',
    },
    spacing: 8,
  });

  return (
    <MuiThemeProvider theme={createdTheme}>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about-us' component={About} />
        <Route exact path='/fellowship-program' component={FellowshipProgram} />
        {/* <Route exact path='/events' component={PublicEvents} /> */}
        <Route exact path='/mentees' component={MenteesPage} />
        <Route exact path='/mentors' component={MentorsPage} />
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/events/:eventId' component={EventPage} />

        <Route exact path='/testing' component={Testing} />
        <Route exact path='/isabela' component={Isabela} />

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/master' component={Master} />
        <Redirect to='/' />
      </Switch>
    </MuiThemeProvider>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
