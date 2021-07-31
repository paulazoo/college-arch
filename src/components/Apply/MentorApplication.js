import React, { useState } from 'react';
import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  CircularProgress,
  Divider,
  Box,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// Redux
import { connect } from 'react-redux';
import { putMentorApplicants } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Navbar from '../Navbar/Navbar';
import statesList from './statesList.js';
import allInterests from './allInterests.js';
import ApplicantGoogleLoginButton from '../LoginPage/ApplicantGoogleLoginButton';
import Footer from '../Footer/Footer';
import { setCurrentlyLoading } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  intro: {
    textAlign: 'center',
    padding: '50px',
  },
  main: {
    padding: '50px',
    backgroundColor: theme.palette.common.teamTwo,
  },
  loginTextContainer: {
    textAlign: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  spacing: {
    padding: 25,
  },
}));

const gradYearList = [
  2026,
  2025,
  2024,
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
  2017,
  2016,
  2015,
  2014,
  2013,
  2012,
  2011,
  2010,
  2009,
  2008,
  2007,
  2006,
  2005,
  2004,
  2003,
  2002,
  2001,
  2000,
  1999,
  1998,
  1997,
  1996,
  1995,
  1994,
  1993,
  1992,
  1991,
  1990,
];

const multiMenteesList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MentorApplication(props) {
  const classes = useStyles();

  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [school, setSchool] = useState('');
  const [essay, setEssay] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [eligible, setEligible] = useState(false);
  const [gradYear, setGradYear] = useState(2021);
  const [interests, setInterests] = useState([]);
  const [multiMentees, setMultiMentees] = useState(1);

  const [usBoolean, setUsBoolean] = useState(true);

  const [error, setError] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'phone':
        setPhone(event.target.value);
        break;
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'essay':
        setEssay(event.target.value);
        break;
      case 'city':
        setCity(event.target.value);
        break;
      case 'college':
        setSchool(event.target.value);
        break;
      case 'country':
        setCountry(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleUsBooleanChange = (event) => {
    if (event.target.value === 'true') {
      setUsBoolean(true);
    } else {
      setUsBoolean(false);
    }
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleEligibleChange = (event) => {
    if (event.target.value === 'true') {
      setEligible(true);
    } else {
      setEligible(false);
    }
  };

  const selectInterests = (event, value) => {
    setInterests(value);
  };

  const [background, setBackground] = useState({
    first_gen: false,
    low_income: false,
    stem_girl: false,
    single_parent: false,
    disabled: false,
    lgbt: false,
    black: false,
    hispanic: false,
    asian: false,
    pi: false,
    native: false,
    immigrant: false,
    undoc: false,
    me_na: false,
  });

  const handleBackgroundChange = (event) => {
    setBackground({ ...background, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    if (
      firstName === '' ||
      lastName === '' ||
      (state === '' && usBoolean === true) ||
      (country === '' && usBoolean === false) ||
      eligible === false ||
      essay === '' ||
      city === '' ||
      phone === '' ||
      school === ''
    ) {
      setError(true);
    } else {
      setError(false);
      // api call
      const identifiers = Object.keys(background);
      const activeBackgrounds = identifiers.filter(function (v) {
        return background[v];
      });

      props.putMentorApplicants({
        phone,
        city,
        state,
        country,
        essay,
        email: props.user.email,
        backgrounds: activeBackgrounds.toString(),
        first_name: firstName,
        family_name: lastName,
        school,
        us_living: usBoolean,
        grad_year: 2021,
        interests: interests.toString(),
        applicant_type: 'Mentor',
      });

      setSubmitting(true);
      setTimeout(function () {
        setSubmitting(false);
      }, 4000);
    }
  };

  const renderLogin = () => {
    if (props.currentlyLoading === true) {
      return (
        <Grid item xs={12}>
          <Grid container direction='row' alignItems='center' justify='center'>
            <Grid item>
              <Typography>Please wait while logging in...</Typography>
            </Grid>
            <Grid item xs={12} />
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    return (
      <>
        <Grid item xs={12} className={classes.loginTextContainer}>
          <Typography className={classes.loginText}>
            Fellow Mentorship Application Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.spacing} />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
          >
            <Grid item>
              <Box className={classes.spacing}>
                <ApplicantGoogleLoginButton />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className={classes.main}>
        {sessionStorage.getItem('applicant_token') && props.user.id ? (
          <>
            <Card>
              <Grid
                container
                direction='row'
                alignItems='center'
                spacing={4}
                justify='center'
                className={classes.intro}
              >
                <Grid item>
                  <Typography variant='h3'>
                    College ARCH Fellowship Application
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Apply to mentor an underserved high school student! College
                    ARCH is focused on increasing accessibility of resources and
                    providing guidance to underrepresented students going
                    through the college application process with the goal of
                    decreasing the achievement gap in higher education and fix
                    inequalities in college guidance that disparately impact
                    marginalized communities and lead to cycles of
                    inaccessibility and stratification.
                  </Typography>
                  <Typography>
                    The fellowship program will take place between July 7-August
                    6 with a minimum time commitment of 1 hour per week for
                    mentors. The priority deadline is June 30 and the final
                    deadline is July 2.
                  </Typography>
                </Grid>
              </Grid>
            </Card>
            <div style={{ height: 25 }} />
            <Card style={{ padding: 25 }}>
              <Grid
                container
                spacing={3}
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item xs={12}>
                  <Typography>
                    <b>{`Email: ${props.user.email}`}</b>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id='firstName'
                    value={firstName}
                    onChange={handleChange}
                    variant='outlined'
                    fullWidth
                    label='First Name'
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    value={lastName}
                    onChange={handleChange}
                    id='lastName'
                    variant='outlined'
                    fullWidth
                    label='Last Name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={phone}
                    onChange={handleChange}
                    id='phone'
                    fullWidth
                    variant='outlined'
                    label='Phone Number'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>Are you living in the U.S.?</Typography>
                  <FormControl component='fieldset'>
                    <RadioGroup
                      value={usBoolean}
                      onChange={handleUsBooleanChange}
                    >
                      <FormControlLabel value control={<Radio />} label='Yes' />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label='No'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                {usBoolean ? (
                  <Grid item xs={12}>
                    <Typography>Select your state or U.S. territory</Typography>
                    <Select
                      fullWidth
                      variant='outlined'
                      value={state}
                      onChange={handleStateChange}
                    >
                      {statesList.map((option) => (
                        <MenuItem value={option}>{option}</MenuItem>
                      ))}
                    </Select>
                  </Grid>
                ) : (
                  <Grid item xs={12}>
                    <Typography>Enter your country</Typography>
                    <TextField
                      fullWidth
                      value={country}
                      id='country'
                      onChange={handleChange}
                      variant='outlined'
                      label='Country'
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant='outlined'
                    label='City or Town'
                    id='city'
                    value={city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Are you currently in college, have graduated from college,
                    or was accepted and are on a gap year from college? (You
                    must qualify under one of these categories to be a College
                    ARCH mentor)
                  </Typography>
                  <RadioGroup value={eligible} onChange={handleEligibleChange}>
                    <FormControlLabel value control={<Radio />} label='Yes' />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Typography>What is the name of your college?</Typography>
                  <TextField
                    fullWidth
                    variant='outlined'
                    label='College'
                    value={school}
                    onChange={handleChange}
                    id='college'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    What year will you graduate or did you graduate from
                    college?
                  </Typography>
                  <Autocomplete
                    value={gradYear}
                    onChange={(event, newValue) => {
                      setGradYear(newValue);
                    }}
                    // value={gradYear}
                    options={gradYearList}
                    getOptionLabel={(option) => String(option)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='College Graduation Year'
                        variant='outlined'
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Would you be willing to mentor more than 1 mentee? If so,
                    select how many mentees you would be willing to mentor.
                  </Typography>
                  <Autocomplete
                    value={multiMentees}
                    onChange={(event, newValue) => {
                      setMultiMentees(newValue);
                    }}
                    // value={gradYear}
                    options={multiMenteesList}
                    getOptionLabel={(option) => String(option)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='# of Mentees'
                        variant='outlined'
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Please select the closest to your major.
                  </Typography>
                  <Autocomplete
                    multiple
                    getOptionLabel={(option) => String(option)}
                    options={allInterests}
                    value={interests}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant='outlined'
                        label='Interests'
                        fullWidth
                      />
                    )}
                    onChange={selectInterests}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Please select any backgrounds with which you identify as
                  </Typography>
                  <Typography variant='h6'>
                    We do not report or use this information for anything other
                    than to better match you to your potential mentees.
                  </Typography>
                  <FormControl
                    component='fieldset'
                    className={classes.formControl}
                  >
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='first_gen'
                            checked={background.first_gen}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='First-generation college student'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='low_income'
                            checked={background.low_income}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Low-income household'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='stem_girl'
                            checked={background.stem_girl}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Womxn in STEM'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='lgbt'
                            checked={background.lgbt}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='LGBTQ+'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='disabled'
                            checked={background.disabled}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Disabled'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='immigrant'
                            checked={background.immigrant}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Immigrant'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='black'
                            checked={background.black}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Black'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='hispanic'
                            checked={background.hispanic}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Latinx or Hispanic'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='native'
                            checked={background.native}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Indigenous or Native American'
                      />
                      <FormControlLabel
                        control={(
                          <Checkbox
                            name='undoc'
                            checked={background.undoc}
                            onChange={handleBackgroundChange}
                          />
                        )}
                        label='Undocumented/DACA/Mixed Status Family'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='asian'
                            checked={background.asian}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Asian'
                      />
                      <FormControlLabel
                        control={(
                          <Checkbox
                            name='pi'
                            checked={background.pi}
                            onChange={handleBackgroundChange}
                          />
                        )}
                        label='Native Hawaiian/Pacific Islander'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='me_na'
                            checked={background.me_na}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Middle Eastern and/or North African'
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Why do you want to join as a College ARCH mentor? (max
                    character count: 1000)
                  </Typography>
                  <TextField
                    fullWidth
                    variant='outlined'
                    multiline
                    rowsMax={4}
                    rows={4}
                    value={essay}
                    onChange={handleChange}
                    id='essay'
                    inputProps={{
                      maxLength: 1000,
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12}>
              <Typography>
                Optional: Please submit your resume or CV. Please note that this
                is optional and not submitting a resume or CV will not
                negatively affect your application.
              </Typography>
              <Button variant='contained' color='secondary' component='label'>
                Upload File
                <input type='file' style={{ display: 'none' }} />
              </Button>
            </Grid> */}
                <Grid item xs={12}>
                  {error && (
                    <p style={{ color: 'red' }}>
                      You did not answer all the questions. Please finish
                      answering the questions.
                    </p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Thank you so much for filling this form out, and we will be
                    in contact with you soon! Please share the form link with
                    anyone else that you believe would be a good fit. Also, if
                    you have any questions or concerns, email us at
                    contact.collegearch@gmail.com or DM us on Instagram
                    @collegearch.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'
                  >
                    <Grid item>
                      <Button
                        onClick={handleSubmit}
                        color='primary'
                        variant='contained'
                        disabled={submitting}
                      >
                        Submit
                        {submitting && <CircularProgress />}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </>
        ) : (
          <Card>{renderLogin()}</Card>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    putMentorApplicants: (body) => dispatch(putMentorApplicants(body)),
    setCurrentlyLoading: (currentlyLoading) =>
      dispatch(setCurrentlyLoading(currentlyLoading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorApplication);
