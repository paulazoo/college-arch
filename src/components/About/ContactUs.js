import React, { useEffect } from 'react';
import {
  Divider,
  Card,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TextField,
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

function ContactUs(props) {
  const classes = useStyles();

  return (
    <>
      <WordDivider spacing={125}>
        <Typography variant='h3' className={classes.wordDivider}>
          Connect with us
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
                  Whether you're a student, teacher, organization, or simply
                  curious, we'd love to hear from you!
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth variant='outlined' label='First Name' />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth variant='outlined' label='Last Name' />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth variant='outlined' label='Email Address' />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth variant='outlined' label='Subject' />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant='outlined'
                  label='Message'
                  rows={4}
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained'>Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}

export default ContactUs;
