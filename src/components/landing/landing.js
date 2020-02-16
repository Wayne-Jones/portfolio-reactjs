import React from 'react';
import BackgroundSlider from 'react-background-slider';
import { Box, Container } from '@material-ui/core/';
import './landing.css';

class Landing extends React.Component {
  constructor(props) {
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
        <Box>
          <Container className="landing">
            <h1>{title}</h1>
            <p>{description}</p>
          </Container>
        </Box>
      </>
    );
  }
}

export default Landing;
