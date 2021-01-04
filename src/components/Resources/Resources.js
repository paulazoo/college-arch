import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';

// Custom Components
import Navbar from '../Navbar/Navbar';
import ResourcesDrawer from './ResourcesDrawer';
import Links from '../Links/Links';
import EssayWritingTips from './EssayWritingTips';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  wordDivider: {
    fontSize: 44,
    fontWeight: 'bold',
    color: theme.palette.common.gray,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  mainResources: {
    marginLeft: '20vw',
    padding: 0,
    paddingRight: theme.spacing(2),
    width: 'calc(100% - 20vw)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '25vw',
      paddingRight: 0,
      width: 'calc(100% - 25vw)',
    },
  },
}));

function Resources(props) {
  const classes = useStyles();

  const [selectedResources, setSelectedResources] = useState('Links');

  const renderResources = () => {
    switch (selectedResources) {
      case 'Links':
        return <Links />;
      case 'Essay Writing Tips':
        return <EssayWritingTips />;
      default:
        return <Links />;
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container direction='row'>
        <Grid item>
          <ResourcesDrawer
            selectedResources={selectedResources}
            setSelectedResources={setSelectedResources}
          />
        </Grid>
        <Grid item xs={12} className={classes.mainResources}>
          {renderResources()}
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
