import React, { useState } from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

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
    backgroundColor: `${theme.palette.primary.main} !important`,
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

function ResourcesDrawer({
  selectedResources,
  setSelectedResources,
  ...props
}) {
  const classes = useStyles();

  const aboutChoices = [{ label: 'Links' }, { label: 'EssayWritingTips' }];

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
              setSelectedResources(choice.label);
            }}
            selected={selectedResources === choice.label}
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

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesDrawer);
