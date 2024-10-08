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
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';

// Redux
import { connect } from 'react-redux';
import { putMenteeApplicants } from '../../store/actions/api';
import { setCurrentlyLoading } from '../../store/actions/index';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Navbar from '../Navbar/Navbar';
import statesList from './statesList.js';
import allInterests from './allInterests.js';
import allDreamColleges from './allDreamColleges.js';
import allImportances from './allImportances.js';
import ApplicantGoogleLoginButton from '../LoginPage/ApplicantGoogleLoginButton';

const useStyles = makeStyles((theme) => ({
  intro: {
    textAlign: 'center',
    padding: '50px',
  },
  main: {
    padding: '50px',
    backgroundColor: theme.palette.common.teamOne,
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

const filter = createFilterOptions();

function MenteeApplication(props) {
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
  const [parentSignature, setParentSignature] = useState('');
  const [infoShare, setInfoShare] = useState(false);

  const [age, setAge] = useState(17);

  const [interests, setInterests] = useState([]);
  const [dreamCollege1, setDreamCollege1] = useState('');
  const [dreamCollege2, setDreamCollege2] = useState('');
  const [importance, setImportance] = useState('');

  const [usBoolean, setUsBoolean] = useState(true);

  const [error, setError] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const re = /^[0-9\b]+$/; //for checking age as a number

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
      case 'country':
        setCountry(event.target.value);
        break;
      case 'highschool':
        setSchool(event.target.value);
        console.log(infoShare);
        break;
      case 'parentSignature':
        setParentSignature(event.target.value);
        break;
      case 'age':
        if (re.test(event.target.value)) {
          setAge(event.target.value);
        }
        if (event.target.value < 0) {
          setAge(event.target.value);
        }
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

  const handleInfoShareChange = (event) => {
    if (event.target.value === 'true') {
      setInfoShare(true);
    } else {
      setInfoShare(false);
    }
    console.log(infoShare);
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

  const selectDreamCollege1 = (value) => {
    setDreamCollege1(value);
  };
  const selectDreamCollege2 = (value) => {
    setDreamCollege2(value);
  };

  const selectImportance = (value) => {
    setImportance(value);
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
      importance === '' ||
      (state === '' && usBoolean === true) ||
      (country === '' && usBoolean === false) ||
      eligible === false ||
      (age < 16 && parentSignature === '') ||
      essay === '' ||
      city === '' ||
      phone === '' ||
      background ===
        {
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
        }
    ) {
      setError(true);
    } else {
      setError(false);
      // api call
      const identifiers = Object.keys(background);
      const activeBackgrounds = identifiers.filter(function (v) {
        return background[v];
      });

      props.putMenteeApplicants({
        phone,
        city,
        state,
        country,
        essay,
        age,
        email: props.user.email,
        backgrounds: activeBackgrounds.toString(),
        first_name: firstName,
        family_name: lastName,
        school,
        us_living: usBoolean,
        grad_year: 2023,
        info_share: infoShare,
        interests: interests.toString(),
        dream_colleges: `${dreamCollege1},${dreamCollege2}`,
        importance,
        applicant_type: 'Mentee',
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
            College ARCH Fellowship Application Login
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
                    College ARCH is focused on increasing accessibility of
                    resources and providing guidance to underrepresented
                    students going through the college application process with
                    the goal of decreasing the achievement gap in higher
                    education and fix inequalities in college guidance that
                    disparately impact marginalized communities and lead to
                    cycles of inaccessibility and stratification.
                  </Typography>
                  <Typography
                  // class year to change
                  >
                    UPDATED DUE TO SCHEDULING CHANGES: The fellowship program will take place between July
                    24 - August 12. All mandatory meetings will occur
                    between 1pm EST-9pm EST Monday through Friday, with a total
                    commitment of 3 to 4 hours a week. The application deadline
                    is July 21, 2023. College ARCH fellows must be graduating
                    high school in the 2023-2024 academic year.
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
                  <Typography
                  // class year to change
                  >
                    Will you be graduating high school in 2024? (Only the Class
                    of 2024 may register as fellows. If you are in college or
                    following an alternative education path, please contact
                    contact.collegearch@gmail.com to determine eligibility as a
                    fellow.)
                  </Typography>
                  <RadioGroup value={eligible} onChange={handleEligibleChange}>
                    <FormControlLabel value control={<Radio />} label='Yes' />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Typography>What is your age?</Typography>
                  <TextField
                    type={'number'}
                    variant='outlined'
                    value={age}
                    id='age'
                    onChange={handleChange}
                  />
                </Grid>
                {age < 16 && (
                  <Grid item xs={12}>
                    <Typography>
                      Fellows under the age of 16 require parental/guardian
                      permission. If under 16, please have a parent/guardian
                      sign here:
                    </Typography>
                    <TextField
                      fullWidth
                      value={parentSignature}
                      id='parentSignature'
                      onChange={handleChange}
                      variant='standard'
                      label='Parent Signature'
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Typography>
                    Consent: One of the most rewarding aspects of the College
                    ARCH summer fellowship that each of the fellows are paired
                    with their own college-aged mentor. Do you give us
                    permission to share your contact information with your
                    potential mentor? If you select no, you will not be paired
                    with a mentor but are welcome to join the panels.
                  </Typography>
                  <FormControl component='fieldset'>
                    <RadioGroup
                      value={infoShare}
                      onChange={handleInfoShareChange}
                    >
                      <FormControlLabel value control={<Radio />} label='Yes' />
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label='No'
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography>
                    <i>
                      Please keep in mind that our mentorship program is a
                      fundamental component of the ARCH summer fellowship and
                      much of the program centers around it.
                    </i>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Optional: What High School do you go to? (This helps us to
                    better connect you with relevant opportunities and networks)
                  </Typography>
                  <TextField
                    fullWidth
                    variant='outlined'
                    label='High School'
                    value={school}
                    onChange={handleChange}
                    id='highschool'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Please select your academic and career interests and/or
                    possible future major(s).
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
                    Please select up to two colleges/universities you are
                    thinking of applying to. This helps us pair you
                    with an appropriate mentor.
                  </Typography>
                  <Autocomplete
                    value={dreamCollege1}
                    onChange={(event, newValue) => {
                      selectDreamCollege1(newValue);
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some(
                        (option) => inputValue === option
                      );
                      if (inputValue !== '' && !isExisting) {
                        filtered.push(`${inputValue}`);
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    options={allDreamColleges}
                    getOptionLabel={(option) => String(option)}
                    freeSolo
                    renderInput={(params) => (
                      <TextField {...params} label='Potential College 1' />
                    )}
                  />
                  <br />
                  <Autocomplete
                    value={dreamCollege2}
                    onChange={(event, newValue) => {
                      selectDreamCollege2(newValue);
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some(
                        (option) => inputValue === option
                      );
                      if (inputValue !== '' && !isExisting) {
                        filtered.push(`${inputValue}`);
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    options={allDreamColleges}
                    getOptionLabel={(option) => String(option)}
                    freeSolo
                    renderInput={(params) => (
                      <TextField {...params} label='Potential College 2' />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    College ARCH is currently only accepting those students of
                    underrepresented backgrounds. Please select the backgrounds
                    with which you identify as
                  </Typography>
                  <Typography variant='h6'>
                    We do not report or use this information for anything other
                    than checking your eligibility status.
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
                            name='undoc'
                            checked={background.undoc}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Undocumented/DACA/Mixed Status Family'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='black'
                            checked={background.black}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='African or African American'
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
                        label='Native American or Alaska Native'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='asian'
                            checked={background.asian}
                            onChange={handleBackgroundChange}
                          />
                        }
                        label='Asian or Asian American'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name='pi'
                            checked={background.pi}
                            onChange={handleBackgroundChange}
                          />
                        }
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
                  <Typography>
                    If you do not see your background in the following list, but
                    believe you are still eligible for the College ARCH
                    Fellowship, please contact us at
                    contact.collegearch@gmail.com.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Why do you want to be a College ARCH summer fellow? (max
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
                <Grid item xs={12}>
                  <Typography>
                    Help us get better at matching!
                    Please rank the importance of the following characteristics 
                    for a hypothetical mentor for you, personally (from most to least important):
                  </Typography>
                  <Typography>
                    1) College, 2) Academic/Career Interests, 3) Background Identity, 4) Hometown Location
                  </Typography>
                  <Autocomplete
                    value={importance}
                    onChange={(event, newValue) => {
                      selectImportance(newValue);
                    }}
                    filterOptions={(options, params) => {
                      const filtered = filter(options, params);

                      const { inputValue } = params;
                      // Suggest the creation of a new value
                      const isExisting = options.some(
                        (option) => inputValue === option
                      );
                      if (inputValue !== '' && !isExisting) {
                        filtered.push(`${inputValue}`);
                      }

                      return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    options={allImportances}
                    getOptionLabel={(option) => String(option)}
                    freeSolo
                    renderInput={(params) => (
                      <TextField {...params} label='Matching Importance Ranking' />
                    )}
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
    putMenteeApplicants: (body) => dispatch(putMenteeApplicants(body)),
    setCurrentlyLoading: (currentlyLoading) =>
      dispatch(setCurrentlyLoading(currentlyLoading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MenteeApplication);
