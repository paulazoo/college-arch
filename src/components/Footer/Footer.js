import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';

// Redux

// Theme
import { makeStyles } from '@material-ui/core/styles';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import FooterSocialMedia from './FooterSocialMedia';

// Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    paddingTop: theme.spacing(1),
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.common.white,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  textContainer: {
    textAlign: 'center',
  },
  socialMediaContainer: {
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='row' spacing={2} justify='space-between'>
        <Grid item md={12} />
        <Grid item xs={12} md={4}>
          <div className={classes.textContainer}>
            <Typography className={classes.text}>
              © Copyright 2021 College ARCH
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.textContainer}>
            <Typography className={classes.text}>
              Made with 💗 by College ARCH
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.textContainer}>
            <Link href='/terms' className={classes.text}>
              Privacy Policy & Terms of Use
            </Link>
          </div>
        </Grid>
        <FooterSocialMedia />
        <Grid item md={12} />
      </Grid>
    </div>
  );
}
