import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions';

// Theme
import { makeStyles, useTheme } from '@material-ui/styles';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import LoggedOutNavbar from './LoggedOutNavbar';
import LoggedInNavbar from './LoggedInNavbar';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
}));

function DesktopNavbar({ ...props }) {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.common.white;
  }, []);

  return (
    <>
      <PersonalSnackbar />
      {sessionStorage.getItem('access_token') && props.user.id ? (
        <LoggedInNavbar />
      ) : (
        <LoggedOutNavbar />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  account: state.account.account,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavbar);
