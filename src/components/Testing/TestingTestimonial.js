// Template for components
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

// Redux
import { connect } from 'react-redux';

// Theme
import { makeStyles } from '@material-ui/core/styles';
import Testimonials from '../Testimonials/Testimonials';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function Testing(props) {
  const classes = useStyles();

  const handleClick = () => {
    console.log('clicked');
  };

  const testimonialData = [
    {
      source: 'hi',
      author: 'author 1',
      content: 'content 1',
    },
    {
      source: 'hiya',
      author: 'author 2',
      content: 'content 2',
    },
  ];

  return (
    <>
      <Testimonials testimonialData={testimonialData} />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
