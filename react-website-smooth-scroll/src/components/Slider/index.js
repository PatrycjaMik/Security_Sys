import React, {useState} from 'react';
import Image from '../../images/background.jpg';
import {Button} from '../ButtonElement';
import {SliderContainer, SliderBg, VideoBg, SliderContent, SliderH1, SliderP, SliderBtnWrapper, ArrowForward, ArrowRight} from "./SliderElements";

const Slider = () => {
   const [hover, setHover] = useState(false);

    const onHover = () => {
       setHover(!hover)
    };

    return (
        <SliderContainer>
        <SliderBg>
            <VideoBg src={Image} type='background.jpg' />
        </SliderBg>
            <SliderContent>
            <SliderH1>Lorum Ipsum lorem</SliderH1>
            <SliderP>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</SliderP>
            <SliderBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </SliderBtnWrapper>
            </SliderContent>
        </SliderContainer>
    );
};

export default Slider;