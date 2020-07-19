import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Card,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Team from './Team';
import WordDivider from '../Shared/WordDivider';
import AboutDrawer from './AboutDrawer';
import MissionPurpose from './MissionPurpose';
import OurStory from './OurStory';

// Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  mainAbout: {
    marginLeft: '20vw',
    padding: 0,
    paddingRight: theme.spacing(2),
    width: 'calc(100% - 20vw)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '25vw',
      paddingRight: 0,
      width: 'calc(100% - 25vw)',
    },
  },
}));

function About(props) {
  const classes = useStyles();

  const [selectedAbout, setSelectedAbout] = useState('Mission and Purpose');

  const renderAbout = () => {
    switch (selectedAbout) {
      case 'Mission and Purpose':
        return <MissionPurpose />;
      case 'Our Story':
        return <OurStory />;
      case 'Meet The Team':
        return <Team />;
      default:
        return <MissionPurpose />;
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container direction='row'>
        <Grid item>
          <AboutDrawer
            selectedAbout={selectedAbout}
            setSelectedAbout={setSelectedAbout}
          />
        </Grid>
        <Grid item xs={12} className={classes.mainAbout}>
          {renderAbout()}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
