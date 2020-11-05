import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({}));

const stateList = ['Virginia', 'Colorado', 'Texas', 'Hawaii'];

function MenteeApplication(props) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('we');
  const [lastName, setLastName] = useState('');
  const [state, setState] = useState('');

  const [usBoolean, setUsBoolean] = useState(true);

  const handleChange = (event) => {
    switch (event.target.id) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
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

  const handleSubmit = () => {
    // TODO: eventually actually run the api call, but for now just console.log
    console.log('first name: ', firstName);
    console.log('last name: ', lastName);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: 50 }}>
        <Card>
          <Grid container direction='row'>
            <Grid item>
              <Typography variant='h2'>
                College ARCH Fellowship Application
              </Typography>
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
              <TextField fullWidth variant='outlined' label='Email' />
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
                  {stateList.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Typography>Enter your country</Typography>
                <TextField fullWidth variant='outlined' label='Country' />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField fullWidth variant='outlined' label='City or Town' />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Are you a senior in high school? (Only High School seniors may
                register as fellows. If you are in college or beyond, please
                contact contact@collegearch@gmail.com to register as a higher-ed
                follow or mentor)
              </Typography>
              <RadioGroup
                aria-label='gender'
                name='gender1'
                // value=true
                onChange={handleChange}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Yes'
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Optional: What High School do you go to? (This helps us to
                better connect you with better tailored opportunities and
                networks.
              </Typography>
              <TextField fullWidth variant='outlined' label='High School' />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                College ARCH is currently only accepting those students of
                underrepresented backgrounds. Please select the backgrounds with
                which you identify as
              </Typography>
              <TextField fullWidth variant='outlined' label='High School' />
              <Typography>
                If you do not see your background in the following list, but
                believe you are still eligible for the College ARCH Fellowship,
                please contact us at contact.collegearch@gmail.com.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Why do you want to join as a fellow? (max character count: 1000)
              </Typography>
              <TextField
                fullWidth
                variant='outlined'
                multiline
                rowsMax={4}
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Optional: Please submit your resume or CV. Please note that this
                is optional and not submitting a resume or CV will not
                negatively affect your application.
              </Typography>
              <TextField fullWidth variant='outlined' multiline rowsMax={4} />
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MenteeApplication);
