import React, { useState } from 'react';
import BackgroundSlider from 'react-background-slider';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid, Typography, Divider, Button,
} from '@material-ui/core/';

import {
  Facebook, Twitter, LinkedIn, YouTube, Instagram,
} from '@material-ui/icons';


const useStyles = makeStyles({
  gridWrapper: {
    minHeight: '100vh',
    color: '#FFF',
  },
  buttonGroup: {
    textAlign: 'center',
    display: 'block',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& button': {
      color: '#FFF',
      border: '1px solid rgba(255, 255, 255, 0.23)',
      padding: '7px 21px',
      fontSize: '0.9375rem',
    },
    '& button:hover': {
      color: '#68c0ff',
      border: '1px solid rgba(104, 192, 255, 0.23)',
    },
  },
  socialIcons: {
    textAlign: 'center',
    '& svg': {
      fontSize: '30px',
      margin: '0.5rem',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
    '& a:hover': {
      color: '#68c0ff',
    },
  },
});


function Landing() {
  const [title, setTitle] = useState('Wayne Jones');
  const [description, setDescription] = useState('Photographer | Full Stack Engineer');
  const image1 = 'images/austin-distel-va_Opp86kfQ-unsplash.jpg';
  const image2 = 'images/britt-gaiser-hSAlu33padA-unsplash.jpg';
  const image3 = 'images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
  const image4 = 'images/noiseporn-JNuKyKXLh8U-unsplash.jpg';
  const image5 = 'images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg';
  const image6 = 'images/tyler-franta-iusJ25iYu1c-unsplash.jpg';

  const classes = useStyles();

  return (
    <>
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5, image6]}
        duration={8}
        transition={1}
      />
      <Grid container alignContent="center" alignItems="center" justify="center" className={classes.gridWrapper}>
        <Grid item xs={12} sm={12} md={10} lg={9} xl={6}>
          <Typography align="center" variant="h3" gutterBottom>{title}</Typography>
          <Typography align="center" variant="h2" gutterBottom>{description}</Typography>
          <Divider variant="middle" light />
          <div className={classes.socialIcons}>
            <a aria-label="Facebook Link" href="https://facebook.com/"><Facebook /></a>
            <a aria-label="Twitter Link" href="https://twitter.com/wayneoflife"><Twitter /></a>
            <a aria-label="LinkedIn Link" href="https://www.linkedin.com/in/wayne-jones"><LinkedIn /></a>
            <a aria-label="Youtube Link" href="https://www.youtube.com/NamixKuro"><YouTube /></a>
            <a aria-label="Instagram Link" href="https://www.instagram.com/wayneoflife/"><Instagram /></a>
          </div>
          <div className={classes.buttonGroup}>
            <Link to="/Photography"><Button>Photography</Button></Link>
            <Link to="/Engineering"><Button>Engineering</Button></Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Landing;
