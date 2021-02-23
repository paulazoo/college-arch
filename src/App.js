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
import { userLogout } from './store/actions';

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
import Isabela from './components/Testing/Isabela';
import ContactUs from './components/About/ContactUs';
import MentorApplication from './components/Apply/MentorApplication';
import MenteeApplication from './components/Apply/MenteeApplication';
import Donate from './components/Donate/Donate';
import Submitted from './components/Apply/Submitted';
import LinksContainer from './components/Links/LinksContainer';
import Footer from './components/Footer/Footer';
import Resources from './components/Resources/Resources';

function App(props) {
  // useEffect(() => {
  //   props.userLogout();
  // }, []);

  const createdTheme = createMuiTheme({
    palette: {
      primary: {
        light: 'hsl(213, 97%, 45%)',
        main: 'hsl(213, 97%, 30%)',
        dark: 'hsl(213, 97%, 14%)',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: 'hsl(24, 99%, 65%)',
        main: 'hsl(24, 99%, 51%)',
        contrastText: '#FFFFFF',
      },
      contrastText: '#fff',
      warning: {
        light: '#FF6961',
        main: '#DC453D',
        dark: '#C33C23',
      },
      common: {
        navbar: 'hsl(24, 99%, 51%)',
        white: 'white',
        lightGray: 'lightgray',
        gray: 'gray',
        black: 'black',
        muted: '#F3AD78',
        teamOne: 'hsl(213, 99%, 80%)',
        teamTwo: 'hsl(24, 99%, 80%)',
        asSeenIn: 'hsl(24, 99%, 70%)',
        admissionsOfficers: 'hsl(24, 99%, 70%)',
        loginout: 'hsl(213, 99%, 20%)',
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
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/donate' component={Donate} />
        <Route exact path='/events/:eventId' component={EventPage} />

        {/* Application pages */}
        <Route exact path='/apply' component={Apply} />
        <Route exact path='/apply/mentor' component={MentorApplication} />
        <Route exact path='/apply/mentee' component={MenteeApplication} />
        <Route exact path='/apply/submitted' component={Submitted} />

        <Route exact path='/testing' component={Testing} />
        <Route exact path='/isabela' component={Isabela} />

        <Route exact path='/resources' component={Resources} />
        <Route exact path='/links' component={LinksContainer} />

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/master' component={Master} />
        <Redirect to='/' />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return state;
};

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
