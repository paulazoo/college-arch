import React, { useEffect } from 'react';
import { Card, Typography, Grid } from '@material-ui/core';

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
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5px !important',
      paddingRight: '5px !important',
      paddingTop: '5px !important',
    },
  },
  mission: {
    fontWeight: 'bold',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  card: {
    margin: 0,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.common.teamOne,
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

function MissionPurpose(props) {
  const classes = useStyles();

  return (
    <>
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Mission and Purpose
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
                      Here at College ARCH, we strive to...
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
                  <Typography className={classes.mission}>
                    <ul>
                      <li>
                        Make the college application process more accessible for
                        students of underrepresented backgrounds
                      </li>
                      <br />
                      <li>
                        Show students of all backgrounds that there is space for
                        them in elite institutions of higher education
                      </li>
                      <br />
                      <li>
                        Offer a support system for students that reflects their
                        backgrounds, needs, and interests
                      </li>
                      <br />
                      <li>
                        Provide clarity and motivation for students that are
                        struggling in this time of uncertainty
                      </li>
                      <br />
                    </ul>
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

export default MissionPurpose;
