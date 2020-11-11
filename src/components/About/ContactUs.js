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
  IconButton,
  Icon,
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import FacebookSvg from '../../assets/SocialMedia/Facebook.svg';
import TwitterSvg from '../../assets/SocialMedia/Twitter.svg';
import InstagramSvg from '../../assets/SocialMedia/Instagram.svg';
import LinkedinSvg from '../../assets/SocialMedia/Linkedin.svg';

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
    textAlign: 'center',
  },
  story: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
  card: {
    padding: '2vw',
    margin: 0,
    marginRight: theme.spacing(6),
    marginLeft: theme.spacing(6),
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.common.teamOne,
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
      <WordDivider spacing={200}>
        <Typography variant='h3' className={classes.wordDivider}>
          Connect with us!
        </Typography>
      </WordDivider>
      <Card className={classes.card}>
        <Card>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={4}
            className={classes.totalGrid}
          >
            <Grid item xs={12} className={classes.teamNameContainer}>
              <Typography variant='h5'>
                <b>
                  Whether you're a student, teacher, organization, or simply
                  curious, we'd love to hear from you!
                </b>
              </Typography>
            </Grid>
            {/* <Grid item xs={6}>
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
              <Grid item xs={12}>
                <Typography>Or email us:</Typography>
              </Grid> */}
            <Grid item xs={12}>
              <Typography>
                <b>{'General Inquiries: '}</b>
                <a href='mailto:contact.collegearch@gmail.com'>
                  contact.collegearch@gmail.com
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <b>{'Outreach and Partnership Inquiries: '}</b>
                <a href='mailto:outreach.collegearch@gmail.com'>
                  outreach.collegearch@gmail.com
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <b>{'Recruitment and Career Inquiries: '}</b>
                <a href='mailto:recruitment.collegearch@gmail.com'>
                  recruitment.collegearch@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <div style={{ padding: '1vw' }} />
        <Card>
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={4}
            className={classes.totalGrid}
          >
            <Grid item xs={12}>
              <Typography variant='h5' className={classes.teamNameContainer}>
                <b>Follow our instagram and facebook for updates and info!</b>
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                size='small'
                target='_blank'
                href='https://www.instagram.com/collegearch/'
              >
                <Icon>
                  <img alt='ig' src={InstagramSvg} width={24} height={24} />
                </Icon>
              </IconButton>
              <a href='https://www.instagram.com/collegearch/'>@collegearch</a>
            </Grid>
            <Grid item>
              <IconButton
                size='small'
                target='_blank'
                href='https://www.facebook.com/collegearch/'
              >
                <Icon>
                  <img alt='fb' src={FacebookSvg} width={24} height={24} />
                </Icon>
              </IconButton>
              <a href='https://www.facebook.com/collegearch/'>
                facebook.com/collegearch
              </a>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5' className={classes.teamNameContainer}>
                <b>Check out our other social media as well!</b>
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                size='small'
                target='_blank'
                href='https://www.linkedin.com/company/college-arch/'
              >
                <Icon>
                  <img
                    alt='linkedin'
                    src={LinkedinSvg}
                    width={24}
                    height={24}
                  />
                </Icon>
              </IconButton>
              <a href='https://www.linkedin.com/company/college-arch/'>
                linkedin.com/company/college-arch
              </a>
            </Grid>
            <Grid item>
              <IconButton
                size='small'
                target='_blank'
                href='https://twitter.com/collegearch'
              >
                <Icon>
                  <img alt='twitter' src={TwitterSvg} width={24} height={24} />
                </Icon>
              </IconButton>
              <a href='https://www.twitter.com/collegearch/'>@collegearch</a>
            </Grid>
          </Grid>
        </Card>
      </Card>
    </>
  );
}

export default ContactUs;
