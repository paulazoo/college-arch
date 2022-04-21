import React from 'react';
import { Button } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions/index';

// Custom Components
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
}));

function MentorsPage(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Button>Mentors Page</Button>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorsPage);
