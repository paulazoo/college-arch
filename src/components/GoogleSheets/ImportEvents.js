import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { postImportEvents } from '../../store/actions/api';

// Custom Components

const useStyles = makeStyles((theme) => ({
  importButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}));

function ImportEvents(props) {
  const classes = useStyles();

  const handleImport = () => {
    props.postImportEvents();
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid container direction='column' alignItems='center' justify='center'>
          <Grid item>
            <Typography>Import Events from import_events</Typography>
          </Grid>
          <Grid item>
            <Button
              color='secondary'
              variant='contained'
              onClick={handleImport}
              className={classes.importButton}
            >
              Import
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.account.account,
});

function mapDispatchToProps(dispatch) {
  return {
    postImportEvents: () => dispatch(postImportEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportEvents);
