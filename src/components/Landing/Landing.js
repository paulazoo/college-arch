import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Divider,
  Card,
  Box,
} from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components
import Navbar from '../Navbar/Navbar';
import HomepageLayout from './HomepageLayout';
import Footer from '../Footer/Footer';
import Three from './Three';
import WordDivider from '../Shared/WordDivider';
import AsSeenIn from './AsSeenIn';
import Partners from './Partners';
import Overview from './Overview';
import EmailNewsletter from '../EmailNewsletter/EmailNewsletter';
import Public from '../PublicEvents/Public';

const backgroundImage =
  'https://static.wixstatic.com/media/6f9a2f9dd5574440a18d95f4679c14a7.jpg/v1/fit/w_924,h_520/6f9a2f9dd5574440a18d95f4679c14a7.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  explainPaper: {
    backgroundImage: '',
    // 'url("https://images.pexels.com/photos/116720/pexels-photo-116720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundColor: theme.palette.primary.main,
    backgroundPosition: 'center',
    color: theme.palette.common.white,
    paddingTop: '4vw',
    paddingRight: '10vw',
    paddingLeft: '10vw',
    paddingBottom: '4vw',
  },
  button: {
    minWidth: 200,
    // marginTop: theme.spacing(8)
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  landingText1: {
    fontWeight: 'bold',
    fontSize: '3vw',
  },
  landingText2: {
    fontWeight: 'bold',
    fontSize: '2vw',
  },
  landingText3: {
    fontWeight: 'normal',
    fontSize: '1.5vw',
  },
  textGrid: {
    textAlign: 'center',
    width: '100%',
    padding: 0,
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  applyButton: {
    fontWeight: 'bold',
    fontSize: '1.5vw',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  dueDateContainer: {
    textAlign: 'center',
  },
  dueDate: {
    fontWeight: 'bold',
    fontSize: '1vw',
  },
  spacing: {
    height: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(1),
    },
  },
  memberCount: {
    fontWeight: 'bold',
    fontSize: '4vw',
  },
  mentorsFrom: {
    fontWeight: 'bold',
    fontSize: '1.5vw',
  },
}));

function Landing(props) {
  const classes = useStyles();

  const history = useHistory();

  const theme = useTheme();

  const myRef = useRef(null);

  const handleApply = () => {
    history.push('/apply');
  };

  const handleGoToEvents = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!sessionStorage.getItem('access_token') || !props.user?.id) {
      props.userLogout();
    }
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      <HomepageLayout backgroundClassName={classes.background}>
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt='increase priority'
        />
        <Grid container direction='row' justify='center'>
          <Grid item xs={0} md={4} />
          <Grid item xs={12} className={classes.textGrid}>
            <Typography color='inherit' className={classes.landingText1}>
              REIMAGINING COLLEGE GUIDANCE
            </Typography>
          </Grid>
          <Grid item xs={0} md={0} />
          <Grid item xs={10} md={5} className={classes.textGrid}>
            <Typography color='inherit' className={classes.landingText2}>
              From underrepresented students to underrepresented students
            </Typography>
          </Grid>
          <Grid item xs={0} md={12} />
          <Grid item xs={8} md={5} className={classes.textGrid}>
            <Typography color='inherit' className={classes.landingText3}>
              College ARCH (Application Resources for College and
              Higher-Education) was founded on the idea of free, accessible
              guidance to the college application process for those of
              underprivileged backgrounds
            </Typography>
            <Grid item xs={0} md={12} className={classes.textGrid} />
            <Button
              color='secondary'
              variant='contained'
              className={classes.applyButton}
              onClick={handleApply}
              // disabled
              // style={{ backgroundColor: 'gray' }}
            >
              APPLY NOW
            </Button>
            <Grid item xs={0} md={12} className={classes.textGrid} />
            {/* <Typography className={classes.dueDate}>
              Fellowship applications will be open again in January 2021
            </Typography> */}
          </Grid>
          <Grid item xs={12} className={classes.textGrid}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
            >
              <Grid item>
                <Button
                  color='primary'
                  variant='contained'
                  className={classes.applyButton}
                  onClick={handleGoToEvents}
                >
                  EVENTS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </HomepageLayout>
      <WordDivider spacing={225}>
        <Typography className={classes.wordDivider}>
          Our Fellowship Program
        </Typography>
      </WordDivider>
      <Three />
      <div className={classes.spacing} />
      <Card elevation={2}>
        <Box
          bgcolor={theme.palette.secondary.light}
          color={theme.palette.primary.main}
          textAlign='center'
        >
          <Typography className={classes.memberCount}>
            250+ Fellows and 250+ Mentors
          </Typography>
          <Grid container direction='row' alignItems='center' justify='center'>
            <Grid item xs={8}>
              <Typography className={classes.mentorsFrom}>
                With mentors from Harvard, Johns Hopkins, Columbia, UCLA, Yale,
                MIT, Dartmouth, USC, Duke, Emory, Brown, Georgetown, Princeton,
                Cornell, WashU, UPenn, Stanford, and more.
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Box>
      </Card>
      <div ref={myRef} className={classes.spacing} />
      <Public />
      <div className={classes.spacing} />
      <Overview />
      <div className={classes.spacing} />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item>
          <Button
            variant='contained'
            color='secondary'
            className={classes.applyButton}
            onClick={handleApply}
            // disabled
          >
            APPLY NOW
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.dueDateContainer}>
          <br />
          {/* <Typography className={classes.dueDate}>
            Fellowship applications will be open again in January 2021
          </Typography> */}
        </Grid>
      </Grid>
      <div className={classes.spacing} />
      <Grid item xs={12}>
        <AsSeenIn />
      </Grid>
      <Grid item xs={12}>
        <Partners />
      </Grid>
      <div className={classes.spacing} />
      <EmailNewsletter />
      <div className={classes.spacing} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
