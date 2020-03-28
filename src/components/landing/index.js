import React, { useState } from 'react';
import BackgroundSlider from 'react-background-slider';
import {
  Grid, Typography, Divider, Button, ButtonGroup,
} from '@material-ui/core/';
import {
  makeStyles,
} from '@material-ui/core/styles';
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
    '& button': {
      color: '#FFF',
      border: '1px solid rgba(255, 255, 255, 0.23)',
    },
  },
  socialIcons: {
    textAlign: 'center',
    '& svg': {
      fontSize: '30px',
      margin: '0.5rem',
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
            <Facebook />
            <Twitter />
            <LinkedIn />
            <YouTube />
            <Instagram />
          </div>
          <ButtonGroup size="large" variant="outlined" aria-label="text button group" className={classes.buttonGroup}>
            <Button>Photography</Button>
            <Button>Engineering</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}
export default Landing;
