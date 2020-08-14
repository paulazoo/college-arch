import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  Snackbar,
  Card,
  Divider,
  TextField,
  Select,
  MenuItem,
  Dialog,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { putMasterAccount } from '../../store/actions/api';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ProfilePic from '../ProfilePic/ProfilePic';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.teamOne,
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  card: {
    padding: theme.spacing(1),
    overflowY: 'auto',
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  textDetails: {
    fontSize: 18,
  },
  cardContainer: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
}));

function MasterProfile({
  account,
  masterProfileOpen,
  setMasterProfileOpen,
  ...props
}) {
  const classes = useStyles();

  const history = useHistory();

  const [bio, setBio] = useState(account.bio);
  const [phone, setPhone] = useState(account.phone);
  const [school, setSchool] = useState(account.school);
  const [email, setEmail] = useState(account.email);
  const [gradYear, setGradYear] = useState(account.grad_year);
  const [gradYearError, setGradYearError] = useState(false);

  useEffect(() => {
    setBio(account.bio);
    setPhone(account.phone);
    setSchool(account.school);
    setEmail(account.email);
    setGradYear(account.grad_year);
  }, [account]);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleGradYearChange = (e) => {
    setGradYear(e.target.value);
  };

  const handleSubmitAccount = () => {
    if (
      +gradYear === parseInt(gradYear) ||
      account.user_type === 'Mentee' ||
      gradYear === null
    ) {
      setGradYearError(false);
      props.putMasterAccount({
        email,
        bio,
        phone,
        school,
        grad_year: gradYear,
        other_account_id: account.id,
      });
    } else {
      setGradYearError(true);
    }
  };

  const handleMasterProfileClose = () => {
    setMasterProfileOpen(false);
  };

  return (
    <Dialog open={masterProfileOpen} onClose={handleMasterProfileClose}>
      <Card className={classes.card}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={3}
        >
          <Grid item>
            <ProfilePic
              account={account}
              buttonHeight={128}
              imgHeight={128}
              imgWidth={128}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.text}>
              Edit This Person's Account
            </Typography>
            <Typography className={classes.textDetails}>
              {`Full Name: ${account.name}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              variant='outlined'
              value={email}
              onChange={handleEmailChange}
              label='Email'
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              variant='outlined'
              value={phone}
              onChange={handlePhoneChange}
              label='Phone Number'
            />
          </Grid>
          {account.user_type === 'Mentor' && (
            <>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  variant='outlined'
                  value={school}
                  onChange={handleSchoolChange}
                  label='School'
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  fullWidth
                  variant='outlined'
                  value={gradYear}
                  onChange={handleGradYearChange}
                  label='Graduation Year'
                  error={gradYearError}
                  helperText='Must be an integer'
                />
              </Grid>
            </>
          )}
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              variant='outlined'
              value={bio}
              multiline
              rows={3}
              onChange={handleBioChange}
              label='Tell Us About Yourself :)'
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container direction='row' justify='space-between'>
              <Grid item>
                <Button variant='contained' onClick={handleMasterProfileClose}>
                  Close
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={handleSubmitAccount}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    putMasterAccount: (body) => dispatch(putMasterAccount(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterProfile);
