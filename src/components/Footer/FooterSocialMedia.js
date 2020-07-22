import React from 'react';
import {
  Grid,
  Container,
  Typography,
  Link,
  IconButton,
  Icon,
} from '@material-ui/core';

// Redux

// Theme
import { makeStyles } from '@material-ui/core/styles';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';

// Custom Components
import WhiteFacebookSvg from '../../assets/SocialMedia/whiteFacebook.svg';
import WhiteTwitterSvg from '../../assets/SocialMedia/whiteTwitter.svg';
import WhiteInstagramSvg from '../../assets/SocialMedia/whiteInstagram.svg';
import WhiteLinkedinSvg from '../../assets/SocialMedia/whiteLinkedin.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    height: theme.spacing(8),
    display: 'flex',
    padding: 0,
    paddingRight: theme.spacing(8),
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.common.white,
  },
  socialMediaContainer: {
    textAlign: 'center',
  },
}));

function FooterSocialMedia() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.socialMediaContainer}>
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item>
          <IconButton
            size='small'
            target='_blank'
            href='https://www.instagram.com/collegekeyfoundation/'
          >
            <Icon>
              <img src={WhiteInstagramSvg} width={24} height={24} />
            </Icon>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size='small'
            target='_blank'
            href='https://www.linkedin.com/company/68288939/admin/'
          >
            <Icon>
              <img src={WhiteLinkedinSvg} width={24} height={24} />
            </Icon>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size='small'
            target='_blank'
            href='https://www.facebook.com/College-Key-Foundation-113328083738629'
          >
            <Icon>
              <img src={WhiteFacebookSvg} width={24} height={24} />
            </Icon>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            size='small'
            target='_blank'
            href='https://twitter.com/college__key?s=21&fbclid=IwAR0m1F8EBpX-K5MN1K0U1cT8dRWLCzIZH8FeDuE7Chl-eIZJHqbqvfC59m0'
          >
            <Icon>
              <img src={WhiteTwitterSvg} width={24} height={24} />
            </Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FooterSocialMedia;
