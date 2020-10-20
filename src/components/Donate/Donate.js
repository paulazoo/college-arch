import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';

// Custom Components
import PaypalDonate from './PaypalDonate';
import Navbar from '../Navbar/Navbar';

export default function Donate() {
  return (
    <>
      <Navbar />
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12}>
          <p>plsss donate monies bc we are pooor</p>
        </Grid>
        <Grid item xs={12}>
          <PaypalDonate />
        </Grid>
      </Grid>
    </>
  );
}
