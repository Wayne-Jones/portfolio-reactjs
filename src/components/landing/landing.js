import React, { useState } from 'react';
import BackgroundSlider from 'react-background-slider';
import {
  Box, Grid, Typography, Divider, Button, ButtonGroup,
} from '@material-ui/core/';
import {
  Facebook, Twitter, LinkedIn, YouTube, Instagram,
} from '@material-ui/icons';
import './landing.css';

function Landing() {
  const [title, setTitle] = useState('Wayne Jones');
  const [description, setDescription] = useState('Photographer | Full Stack Engineer');
  const image1 = 'images/austin-distel-va_Opp86kfQ-unsplash.jpg';
  const image2 = 'images/britt-gaiser-hSAlu33padA-unsplash.jpg';
  const image3 = 'images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
  const image4 = 'images/noiseporn-JNuKyKXLh8U-unsplash.jpg';
  const image5 = 'images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg';
  const image6 = 'images/tyler-franta-iusJ25iYu1c-unsplash.jpg';

  return (
    <>
      <BackgroundSlider
        images={[image1, image2, image3, image4, image5, image6]}
        duration={8}
        transition={1}
      />
      <Box className="landing">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>{description}</Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" />
        <div>
          <Facebook />
          <Twitter />
          <LinkedIn />
          <YouTube />
          <Instagram />
        </div>
        <ButtonGroup size="large" variant="outlined" aria-label="text button group">
          <Button>Photography</Button>
          <Button>Engineering</Button>
        </ButtonGroup>
      </Box>
    </>
  );
}
export default Landing;
