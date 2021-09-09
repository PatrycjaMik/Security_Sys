import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement';
import {SliderContainer, SliderBg, VideoBg, SliderContent, SliderH1, SliderP, SliderBtnWrapper, ArrowForward, ArrowRight} from "./SliderElements";
import {NavLinks} from "../Navbar/NavbarElements";

const Slider = () => {
   const [hover, setHover] = useState(false);

    const onHover = () => {
       setHover(!hover)
    };

    return (
        <SliderContainer id="home">
        <SliderBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </SliderBg>
            <SliderContent>
            <SliderH1>Lorum Ipsum lorem</SliderH1>
            <SliderP>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</SliderP>
            <SliderBtnWrapper>
                <Button to="signup" onMouseEnter={onHover}
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </SliderBtnWrapper>
            </SliderContent>
        </SliderContainer>
    );
};

export default Slider;