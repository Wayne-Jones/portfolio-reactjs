import React from 'react';
import BackgroundSlider from 'react-background-slider';
import {
  Box, Grid, Typography, Divider,
} from '@material-ui/core/';
import './landing.css';

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Wayne Jones',
      description: 'Photographer, Videographer & Content Creator',
    };
  }

  componentDidMount() {

  }

  render() {
    const image1 = 'images/austin-distel-va_Opp86kfQ-unsplash.jpg';
    const image2 = 'images/britt-gaiser-hSAlu33padA-unsplash.jpg';
    const image3 = 'images/ilya-pavlov-OqtafYT5kTw-unsplash.jpg';
    const image4 = 'images/noiseporn-JNuKyKXLh8U-unsplash.jpg';
    const image5 = 'images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg';
    const image6 = 'images/tyler-franta-iusJ25iYu1c-unsplash.jpg';
    const { title, description } = this.state;
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
              <Typography variant="h3" gutterBottom>{title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" gutterBottom>{description}</Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />

        </Box>
      </>
    );
  }
}

export default Landing;
