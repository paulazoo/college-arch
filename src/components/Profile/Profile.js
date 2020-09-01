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
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { putAccount, getAccount } from '../../store/actions/api';

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
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
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

function Profile(props) {
  const classes = useStyles();

  const history = useHistory();

  const [bio, setBio] = useState(props.account.bio);
  const [phone, setPhone] = useState(props.account.phone);
  const [school, setSchool] = useState(props.account.school);
  const [gradYear, setGradYear] = useState(props.account.grad_year);
  const [gradYearError, setGradYearError] = useState(false);

  const handleBioChange = (e) => {
    setBio(e.target.value);
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
      props.account.user_type === 'Mentee' ||
      gradYear === null
    ) {
      setGradYearError(false);
      props.putAccount({
        bio,
        phone,
        school,
        grad_year: gradYear,
      });
    } else {
      setGradYearError(true);
    }
  };

  useEffect(() => {
    props.getAccount();
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={12} className={classes.cardContainer}>
          {/* <Box border={10} borderColor='#93E3E6'> */}
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
                  account={props.account}
                  buttonHeight={128}
                  imgHeight={128}
                  imgWidth={128}
                />
              </Grid>
              <Grid item>
                <Typography className={classes.text}>
                  Edit Your Profile Details
                </Typography>
                <Typography className={classes.textDetails}>
                  {`Full Name: ${props.account.name}`}
                </Typography>
                <Typography className={classes.textDetails}>
                  {`Email: ${props.account.email}`}
                </Typography>
              </Grid>
              <Grid item xs={0} md={12} />
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant='outlined'
                  value={phone}
                  onChange={handlePhoneChange}
                  label='Phone Number'
                />
              </Grid>
              {props.account.user_type === 'Mentor' && (
                <>
                  <Grid item xs={0} md={12} />
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      variant='outlined'
                      value={school}
                      onChange={handleSchoolChange}
                      label='School'
                    />
                  </Grid>
                  <Grid item xs={0} md={12} />
                  <Grid item xs={12} md={6}>
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
              <Grid item xs={0} md={12} />
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} />
              <Grid item xs={12} md={7}>
                <Grid container direction='row' justify='flex-end'>
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
          {/* </Box> */}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    putAccount: (body) => dispatch(putAccount(body)),
    getAccount: () => dispatch(getAccount()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
