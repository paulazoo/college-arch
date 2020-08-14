import React, { useEffect } from 'react';
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

const useStyles = makeStyles((theme) => ({
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
    textAlign: 'left',
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
    padding: '0 !important',
  },
  story: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
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

function OurStory(props) {
  const classes = useStyles();

  return (
    <>
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Our Story
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
                  {/* <Grid item className={classes.teamNameContainer}>
                    <Typography className={classes.teamName}>
                      {'ou rtory '}
                    </Typography>
                  </Grid> */}
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
                  <Typography className={classes.story}>
                    <p>
                      As the founders of College ARCH (Access and Resources for 
                      College and Higher Education), many of us including our 
                      President, Lucas Leanza (Stanford ’23), are First-Generation 
                      Low-Income (FGLI) students. Inspired through 
                      Questbridge, a college match program for high achieving 
                      low-income students, we aim to recreate that mentor-mentee 
                      relationship and friendship to help thousands of students 
                      with the college application process. For many underrepresented 
                      students, having this kind of peer support while navigating the many
                      aspects in the college application process can make the
                      process feel less stressful.
                    </p>
                    <p>
                      Thus, we realized that individualized support was a
                      key factor missing from existing guidance programs.
                    </p>
                    <p>
                      Our hopes are that the College ARCH’s
                      combination of one-on-one mentorship in addition to
                      traditional information sessions will help support
                      students in all aspects of the college application
                      process.
                    </p>
                    <p>
                      The extra hurdles facing FGLI students and those from
                      other disadvantaged backgrounds in the college admissions
                      process are too often overlooked, and the current economic
                      crisis exacerbates these difficulties. But just as the
                      COVID-19 pandemic has forced the nation’s education model
                      to change, the growing inequalities in our education
                      system has caused the College ARCH to reimagine
                      the way college prep is delivered to students of
                      disadvantaged backgrounds.
                    </p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default OurStory;
