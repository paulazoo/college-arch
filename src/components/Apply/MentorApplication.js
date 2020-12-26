import React, { useEffect, useState } from 'react';
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
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// Redux
import { connect } from 'react-redux';
import { postMentorApplicants } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Navbar from '../Navbar/Navbar';
import statesList from './statesList.js';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  intro: {
    textAlign: 'center',
    padding: '50px',
  },
  main: {
    padding: '50px',
    backgroundColor: theme.palette.common.teamTwo,
  },
}));

const gradYearList = [2025, 2024, 2023];

function MentorApplication(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [college, setHighschool] = useState('');
  const [essay, setEssay] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [eligible, setEligible] = useState(false);
  const [gradYear, setGradYear] = useState(2020);

  const [usBoolean, setUsBoolean] = useState(true);

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
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
        setHighschool(event.target.value);
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
      email === '' ||
      college === ''
    ) {
      setError(true);
    } else {
      setError(false);
      // api call
      props.postMentorApplicants({
        email,
        city,
        state,
        country,
        essay,
        ...background,
        first_name: firstName,
        family_name: lastName,
        school: college,
        us_living: usBoolean,
        grad_year: gradYear,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.main}>
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
                College ARCH is focused on increasing accessibility of resources
                and providing guidance to underrepresented students going
                through the college application process with the goal of
                decreasing the achievement gap in higher educaiton and fix
                inequalities in college guidance that disparately impact
                arginalized communities and lead to cycles of inaccessibility
                and stratification.
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
                value={email}
                onChange={handleChange}
                id='email'
                fullWidth
                variant='outlined'
                label='Email'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Are you living in the U.S.?</Typography>
              <FormControl component='fieldset'>
                <RadioGroup value={usBoolean} onChange={handleUsBooleanChange}>
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
                Are you currently in college, have graduated from college, or
                was accepted and are on a gap year from college? (You must
                qualify under one of these categories to be a College ARCH
                mentor)
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
                value={college}
                onChange={handleChange}
                id='college'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                What year will you graduate or did you graduate from college?
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
                Please select any backgrounds with which you identify as
              </Typography>
              <Typography variant='h6'>
                We do not report or use this information for anything other than
                checking your eligibility status.
              </Typography>
              <FormControl component='fieldset' className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='first_gen'
                        checked={background.first_gen}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='First-generation college student'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='low_income'
                        checked={background.low_income}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Low-income household'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='stem_girl'
                        checked={background.stem_girl}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Womxn in STEM'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='lgbt'
                        checked={background.lgbt}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='LGBTQ+'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='disabled'
                        checked={background.disabled}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Disabled'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='immigrant'
                        checked={background.immigrant}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Immigrant'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='black'
                        checked={background.black}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Black'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='hispanic'
                        checked={background.hispanic}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Latinx or Hispanic'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='native'
                        checked={background.native}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Indigenous or Native American'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='undoc'
                        checked={background.undoc}
                        onChange={handleBackgroundChange}
                      />
                    }
                    label='Undocumented/DACA/Mixed Status Family'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='asian'
                        checked={background.asian}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Asian'
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        name='pi'
                        checked={background.pi}
                        onChange={handleBackgroundChange}
                      />
                    }
                    label='Pacific Islander'
                  />
                  <FormControlLabel
                    control={(
                      <Checkbox
                        name='me_na'
                        checked={background.me_na}
                        onChange={handleBackgroundChange}
                      />
                    )}
                    label='Middle Eastern and/or North African'
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Why do you want to join as a College ARCH mentor? (max character
                count: 1000)
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
                  You did not answer all the questions. Please finish answering
                  the questions.
                </p>
              )}
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
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    postMentorApplicants: (body) => dispatch(postMentorApplicants(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorApplication);
