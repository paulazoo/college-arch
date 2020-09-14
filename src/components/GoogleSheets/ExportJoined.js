import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  MenuItem,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { postExportJoined } from '../../store/actions/api';

// Custom Components
import EventSearch from '../MasterEvents/EventSearch';

const useStyles = makeStyles((theme) => ({
  exportButton: {
    fontSize: 20,
    fontWeight: 'bold',
  },
}));

function ExportJoined(props) {
  const classes = useStyles();

  const [eventResult, setEventResult] = useState(null);
  const [selected, setSelected] = useState({});

  const handleExport = () => {
    props.postExportJoined(eventResult.id);
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={2}
        >
          <Grid item xs={4}>
            <Typography>Export Joined from</Typography>
          </Grid>
          <Grid item xs={6}>
            <EventSearch
              setEventResult={setEventResult}
              selected={selected}
              setSelected={setSelected}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              color='secondary'
              variant='contained'
              onClick={handleExport}
              className={classes.exportButton}
              disabled={eventResult === null}
            >
              Export
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  allEvents: state.events.allEvents,
});

function mapDispatchToProps(dispatch) {
  return {
    postExportJoined: (body) => dispatch(postExportJoined(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExportJoined);
