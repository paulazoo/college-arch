import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, Typography } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function MentorApplication(props) {
  const classes = useStyles();

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Card>
      <Grid container direction='row'>
        <Grid item>
          <Typography>Mentor Application</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorApplication);
