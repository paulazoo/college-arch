import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { setPersonalSnackbar, userLogout } from '../../store/actions/index';

// Theme
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function PersonalSnackbar(props) {
  const classes = useStyles();

  useEffect(() => {
    if (typeof props.personalSnackbar === 'undefined') {
      props.userLogout();
    }
  }, []);

  // TODO: move to overall personal snackbar component
  const handleClosePersonalSnackbar = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setPersonalSnackbar({ content: '', open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={props.personalSnackbar.open}
      autoHideDuration={6000}
      onClose={handleClosePersonalSnackbar}
      message={props.personalSnackbar.content}
    />
  );
}

const mapStateToProps = (state) => ({
  personalSnackbar: state.home.personalSnackbar,
});

function mapDispatchToProps(dispatch) {
  return {
    setPersonalSnackbar: (payload) => dispatch(setPersonalSnackbar(payload)),
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalSnackbar);
