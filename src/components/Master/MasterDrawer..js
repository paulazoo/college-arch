import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';

// Custom Components

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    width: '20vw',
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      width: '25vw',
    },
  },
  sidebarItem: {
    borderRadius: '10px',
  },
  sidebarItemSelected: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: 'white',
    fontWeight: 600,
  },
  itemText: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 9,
    },
  },
}));

function MasterDrawer({ selectedMaster, setSelectedMaster, ...props }) {
  const classes = useStyles();

  const aboutChoices = [
    { label: 'Users' },
    { label: 'Newsletter Emails' },
    { label: 'Events' },
    { label: 'Applicants' },
  ];

  return (
    <div className={classes.drawerContainer}>
      <List>
        {aboutChoices.map((choice, index) => (
          <ListItem
            classes={{
              root: classes.sidebarItem,
              selected: classes.sidebarItemSelected,
            }}
            button
            key={choice.label}
            onClick={() => {
              setSelectedMaster(choice.label);
            }}
            selected={selectedMaster === choice.label}
          >
            <Typography className={classes.itemText}>{choice.label}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterDrawer);
