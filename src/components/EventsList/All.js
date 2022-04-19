import React, { useEffect } from 'react';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { getAllEvents } from '../../store/actions/api';

// Custom Components
import EventsList from './EventsList';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
    height: '40vh',
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function All(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getAllEvents();
  }, []);

  return (
    <>
      {props.allEvents && Object.keys(props.allEvents).length > 0 && (
        <EventsList
          points={Object.values(props.allEvents)}
          title='All Events'
          name='all'
        />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  allEvents: state.events.allEvents,
});

function mapDispatchToProps(dispatch) {
  return {
    getAllEvents: () => dispatch(getAllEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(All);
