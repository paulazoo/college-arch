import { Button, Grid, TextField, InputAdornment } from '@material-ui/core';
import React, { useState } from 'react';

// Custom Components
import PaypalDonate from './PaypalDonate';
import Navbar from '../Navbar/Navbar';

export default function Donate() {
  const [donateAmount, setDonateAmount] = useState('0.0');

  const handleDonateAmount = (e) => {
    setDonateAmount(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        spacing={3}
      >
        <Grid item xs={12}>
          <p>plsss donate monies bc we are pooor</p>
        </Grid>
        <Grid item xs={12}>
          <TextField
            InputProps={{
              inputProps: {
                min: 0.01,
              },
              startAdornment: (
                <InputAdornment position='start'>$</InputAdornment>
              ),
            }}
            type='number'
            variant='outlined'
            label='Donation Amount (USD)'
            value={donateAmount}
            onChange={handleDonateAmount}
          />
        </Grid>
        <Grid item xs={12}>
          <PaypalDonate donateAmount={Number(donateAmount)} />
        </Grid>
      </Grid>
    </>
  );
}
