import { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button1 } from "../../shared/Button/Button1";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./styles/heroSection";

export default function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Worldwide Money Transfer Solutions</HeroH1>
        <HeroP>
          Sign up for a new account today and receive free transfer without fee
          in the next 3 months.
        </HeroP>
        <HeroBtnWrapper>
          <Button1
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={200}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button1>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
