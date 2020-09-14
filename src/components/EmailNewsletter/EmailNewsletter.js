import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { postNewsletterEmails } from '../../store/actions/api';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function EmailNewsletter(props) {
  const classes = useStyles();

  const [emailValue, setEmailValue] = useState('');

  const handleEmailValueChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleNewsletterEmail = () => {
    props.postNewsletterEmails({ email: emailValue });
    setEmailValue('');
  };

  return (
    <>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item>
          <Typography>Sign up for our email newsletter!</Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item>
          <TextField
            variant='outlined'
            label='Your Email'
            placeholder='example@gmail.com'
            value={emailValue}
            onChange={handleEmailValueChange}
          />
        </Grid>
        <Grid item>
          <Button
            color='secondary'
            variant='contained'
            onClick={handleNewsletterEmail}
          >
            Submit!
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    postNewsletterEmails: (body) => dispatch(postNewsletterEmails(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailNewsletter);
