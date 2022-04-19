import React from 'react';
import {
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';

// Custom Components

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
  readyText: {
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
}));

function ReadyApply(props) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.readyText}>
        <h2>Ready to Apply?</h2>
      </Typography>
      <Typography className={classes.text}>
        <ul>
          <li>
            By joining us this Summer, you are joining a network of mentors,
            mentees, scholars, and college students dedicated to improving other
            underrepresented people's lives. As such, we expect satisfactory
            attendance and behavior that represents enthusiasm, civility, and
            tolerance during and after the program
          </li>
          <br />

          <li>
            All meetings will be conducted through Zoom, with the link and
            password provided when accepted to the program.
          </li>
          <br />

          <li>
            By applying, you are allowing us to contact you through email and/or
            any other preferred method of contact.
          </li>
          <br />

          <li>
            The program begins on July 7 and runs until the week of August 7
          </li>
        </ul>
      </Typography>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadyApply);
