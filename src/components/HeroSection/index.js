import React, {useState} from 'react';
// import { Button } from 'react-scroll';
import Video from '../videos/video.mp4';
import Video1 from '../videos/video1.mp4';
import Video2 from '../videos/video2.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  HeroP1,
} from './HeroElements';
import {Button} from '../ButtonElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video2} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Maston George</HeroH1>
        <HeroP>
          Leading Provider of Industrial <br></br> Solutions
        </HeroP>
        <HeroP1>
          Ullamcorper fringi tortor consec adipis elit sed do eiusmod tempor.
        </HeroP1>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            fontWeight="true">
            Our Projects
          </Button>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            fontWeight="true">
            Our Projects
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
