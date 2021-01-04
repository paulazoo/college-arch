import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

// Style
import './Links.css';

// Custom Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Links() {
  const linksList = [
    {
      link: 'http://www.collegearch.org/apply/mentee/',
      name: 'Fellowship Application',
    },
    {
      link: 'http://www.collegearch.org/apply/mentor/',
      name: 'Mentor Application',
    },
    { link: 'http://www.instagram.com/collegearch/', name: 'Instagram' },
    { link: 'http://www.facebook.com/collegearch/', name: 'Facebook' },
    { link: 'http://www.collegearch.org', name: 'Homepage' },
  ];

  return (
    <Grid
      class='info-grid'
      container
      direction='column'
      spacing={3}
      alignItems='center'
      justify='center'
      textAlign='center'
    >
      <Grid item>
        <Typography variant='h4'>
          <b>Important Links:</b>
        </Typography>
      </Grid>
      <Grid item>
        {linksList.map((entry) => (
          <a
            href={entry.link}
            target='_blank'
            rel='noopener noreferrer'
            className='link-button'
          >
            <Typography>
              <b>{entry.name}</b>
            </Typography>
          </a>
        ))}
      </Grid>
    </Grid>
  );
}
