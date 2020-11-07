import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Divider,
  Card,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import FellowshipGeneral from './FellowshipGeneral';
import ReadyApply from './ReadyApply';

const useStyles = makeStyles((theme) => ({
  googleButton: {
    paddingLeft: '22px',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(25),
    },
  },
  title: {
    paddingLeft: '8px',
  },
  more: {
    marginTop: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgResponsive: {
    height: 'auto',
    width: 'auto',
    maxHeight: '40px',
    maxWidth: '250px',
  },
  img: {
    width: '30vh',
    borderRadius: '50%',
  },
  headText: {
    fontWeight: 'bold',
    color: theme.palette.common.black,
    fontSize: 32,
  },
  headTextContainer: {
    textAlign: 'center',
  },
  memberItemContainer: {},
  memberItem: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  totalGrid: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  memberName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  memberTeamName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.palette.primary.main,
  },
  memberPosition: {
    fontSize: 16,
    color: theme.palette.primary.main,
  },
  memberText: {
    color: theme.palette.common.gray,
    fontSize: 14,
  },
  memberTextContainer: {
    textAlign: 'center',
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  teamName: {
    fontWeight: 'bold',
    fontSize: 32,
    color: theme.palette.common.white,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  teamNameContainer: {
    textAlign: 'center',
    padding: '0 !important',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5px !important',
      paddingRight: '5px !important',
      paddingTop: '5px !important',
    },
  },
  applyButton: {
    fontWeight: 'bold',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  dueDateContainer: {
    textAlign: 'center',
  },
  dueDate: {
    fontWeight: 'bold',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
  card: {
    margin: 0,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.common.teamTwo,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },
  },
}));

function FellowshipProgram(props) {
  const classes = useStyles();

  const history = useHistory();

  const handleApply = () => {
    history.push('/apply');
  };

  return (
    <>
      <Navbar />
      <WordDivider spacing={200}>
        <Typography variant='h3' className={classes.wordDivider}>
          Fellowship Program
        </Typography>
      </WordDivider>
      <Card className={classes.card}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} height='100%' width='80%'>
            <Grid
              container
              direction='row'
              justify='center'
              alignItems='center'
              spacing={4}
              className={classes.totalGrid}
            >
              <Grid item xs={12} className={classes.teamNameContainer}>
                <Grid
                  container
                  direction='row'
                  justify='center'
                  className={classes.teamNameContainer}
                >
                  <Grid item className={classes.teamNameContainer}>
                    <Typography className={classes.teamName}>
                      Become a Mentee or Mentor in our Fellowship Program!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.memberItemContainer}>
                <Grid
                  container
                  justify='center'
                  alignItems='center'
                  direction='row'
                  className={classes.memberItem}
                >
                  <FellowshipGeneral />
                  <ReadyApply />
                  <Grid item>
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
                  </Grid>
                  <Grid xs={12} />
                  <Grid item className={classes.dueDateContainer}>
                    {/* <Typography className={classes.dueDate}>
                      Fellowship applications will be open again in January 2021
                    </Typography> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Footer />
    </>
  );
}

export default FellowshipProgram;
