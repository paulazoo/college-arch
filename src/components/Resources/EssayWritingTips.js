import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

// Theme
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoGrid: {
    margin: '20px',
  },
}));

export default function EssayWritingTips() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.infoGrid}
      container
      direction='column'
      spacing={3}
      alignItems='center'
      justify='center'
      textAlign='center'
    >
      <Grid item>
        <Typography variant='h4'>
          <b>Essay Writing Tips</b>
        </Typography>
      </Grid>
    </Grid>
  );
}
