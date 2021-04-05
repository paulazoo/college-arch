import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { getNewsletterEmails } from '../../store/actions/api';

// Custom Components

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    marginTop: 0,
    padding: theme.spacing(2),
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function MasterNewsletterContainer(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getNewsletterEmails();
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Typography className={classes.text}>Newsletter Emails</Typography>
          <List>
            {props.newsletterEmails &&
              props.newsletterEmails.map((newsletterEmail) => (
                <ListItem>
                  <ListItemText>{`${newsletterEmail.email}, `}</ListItemText>
                </ListItem>
              ))}
          </List>
        </Card>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  newsletterEmails: state.master.newsletterEmails,
});

function mapDispatchToProps(dispatch) {
  return {
    getNewsletterEmails: () => dispatch(getNewsletterEmails()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterNewsletterContainer);
