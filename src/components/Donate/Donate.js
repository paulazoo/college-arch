import {
  Button,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Card,
} from '@material-ui/core';
import React, { useState } from 'react';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import PaypalDonate from './PaypalDonate';
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  donationMessage: {
    textAlign: 'center',
    padding: '30px !important',
  },
  backgroundCard: {
    backgroundColor: theme.palette.common.teamOne,
    padding: '2vw',
    margin: '2vw',
  },
  mainCard: {
    padding: '2vw',
  },
}));

export default function Donate() {
  const classes = useStyles();

  const [donateAmount, setDonateAmount] = useState('0.01');

  const handleDonateAmount = (e) => {
    setDonateAmount(e.target.value);
  };

  return (
    <>
      <Navbar />
      <Card className={classes.backgroundCard}>
        <Card className={classes.mainCard}>
          <Grid
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            spacing={3}
          >
            <Grid item xs={12} className={classes.donationMessage}>
              <Typography variant='h4'>
                <b>We need your help to keep this nonprofit running!</b>
              </Typography>
              <Typography>
                <br />
                Your donation will be used to cover the costs of programming for
                our fellows, software costs, filing expenses, server and
                database hosting, data storage, graphics, and website
                functionality.
              </Typography>
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
        </Card>
      </Card>
    </>
  );
}
