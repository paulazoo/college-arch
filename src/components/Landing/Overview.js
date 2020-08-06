import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Grid, Button, Card } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  headTextContainer: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 32,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  mainText: {
    fontWeight: 'normal',
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
  learnMore: {
    fontWeight: 'bold',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 10,
    },
  },
}));

function Overview(props) {
  const classes = useStyles();

  const history = useHistory();

  const handleLearnMore = () => {
    history.push('/about-us');
  };

  return (
    <Box>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <img
            height='90%'
            width='100%'
            alt='Overview Image'
            src={require('../../assets/Overview/foundationCover.png')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.headTextContainer}>
            <Typography className={classes.headText}>WHO ARE WE?</Typography>
            <Typography className={classes.mainText}>
              The College ARCH is an incorporated non-profit
              organization led by low-income and minority students. The
              organization was founded with the intent of helping
              underrepresented students aim high and guide them through the
              complex process of college admissions.
              <br />
              <br />
              Our team attempts to reimagine the way guidance for the admission
              process works. We believe in one-on-one mentorship and guidance,
              in free resources to those who need it, and, above all, in
              creating fairness and equity out of a process that has long served
              to expand the achievement gap between affluent and
              underrepresented communities. We believe in this method because we
              have lived through it - because we were those underrepresented,
              perplexed rising seniors who were behind in the process and needed
              the guidance just a few years ago.
              <br />
              <br />
            </Typography>
            <Button
              variant='contained'
              color='primary'
              className={classes.learnMore}
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
