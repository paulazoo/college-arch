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
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
}));

function FellowshipGeneral(props) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.text}>
        <p>
          <strong>
            <span style={{ textDecoration: 'underline' }}>
              GENERAL INFORMATION ABOUT THE PROGRAM:
            </span>
          </strong>
        </p>
        <p>
          The College ARCH's summer fellowship is a 4-week FREE
          program where fellows attend two virtual workshops (over zoom) each
          week to learn about the college application process, get paired with a
          college mentor (from Harvard, Yale, Princeton, MIT, and other
          colleges) and will also receive additional resources during the 4-week
          programming to learn.
        </p>
        <p>
          <strong>
            <span style={{ textDecoration: 'underline' }}>
              PROGRAM STRUCTURE:
            </span>
          </strong>
        </p>

        <ul>
          <li>Week 1: Standardized testing (SAT/ACT)</li>
          <br />
          <li>
            Week 2: College essays (workshops led by Harvard, Stanford, Hopkins
            students, and more!)
          </li>
          <br />
          <li>
            Week 3: Learning about colleges and building your college list (get
            the opportunity to meet and speak with admissions officers
          </li>
          <br />
          <li>Week 4: Career panel</li>
        </ul>
        <p>
          <strong>
            <span style={{ textDecoration: 'underline' }}>
              FELLOWS ELIGIBILITY:
            </span>
          </strong>
        </p>
        <p>
          This program is open to ONLY rising high school seniors from
          marginalized backgrounds (ex: traditionally underrepresented
          minorities, first-generation and/or low-income, LGBTQ+, undocumented
          students, immigrants, women in STEAM, etc.)
        </p>
        <p>
          <strong>
            <span style={{ textDecoration: 'underline' }}>
              FELLOWS COMMITMENT:
            </span>
          </strong>
        </p>
        <p>
          Fellows MUST commit to attending the virtual workshops over zoom.
          However, we will be extremely flexible and accommodating because of
          the current circumstances.
        </p>
        <p>DEADLINE TO SUBMIT YOUR APPLICATION: June 30 @ 11:59 PM, EST</p>
        <p>FOLLOW US ON INSTAGRAM @collegearch TO RECEIVE UPDATES!</p>
        <br />
      </Typography>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FellowshipGeneral);
